#!/usr/bin/perl -w
#
# hotcoldgraph.pl	flame/cold stack grapher.
#
# EXPERIMENTAL: This is a work in progress, and may not work properly.
#

use strict;

# tunables
my $fonttype = "Verdana";
my $imagewidth = 1200;		# max width, pixels
my $frameheight = 16;		# max height is dynamic
my $fontsize = 12;		# base text size
my $minwidth = 0.1;		# min function width, pixels

# internals
my $ypad1 = $fontsize * 4;	# pad top, include title
my $ypad2 = $fontsize * 2 + 10;	# pad bottom, include labels
my $xpad = 10;			# pad lefm and right
my $timemax = 0;
my $depthmax = 0;
my %Events;

# SVG functions
{ package SVG;
	sub new {
		my $class = shift;
		my $self = {};
		bless ($self, $class);
		return $self;
	}

	sub include {
		my ($self, $content) = @_;
		$self->{svg} .= $content;
	}

	sub colorAllocate {
		my ($self, $r, $g, $b) = @_;
		return "rgb($r,$g,$b)";
	}

	sub svg {
		my $self = shift;
		return "$self->{svg}</svg>\n";
	}
	1;
}

sub color {
	my $type = shift;
	if (defined $type and $type eq "hot") {
		my $r = 205 + int(rand(50));
		my $g = 0 + int(rand(230));
		my $b = 0 + int(rand(55));
		return "rgb($r,$g,$b)";
	}
	if (defined $type and $type eq "cold") {
		my $r = 0 + int(rand(40));
		my $b = 205 + int(rand(50));
		my $g = 0 + int(rand(150));
		return "rgb($r,$g,$b)";
	}
	return "rgb(0,0,0)";
}

my %Node;
my %Tmp;

sub flow {
	my ($a, $b, $ca, $cb, $v) = @_;
	my @A = split ",", $a;
	my @B = split ",", $b;

	my $len_a = $#A;
	my $len_b = $#B;
	$depthmax = $len_b if $len_b > $depthmax;

	my $i = 0;
	my $len_same = 0;
	for (; $i <= $len_a; $i++) {
		last if $i > $len_b;
		last if $A[$i] ne $B[$i];
	}
	$len_same = $i;
	$len_same = 0 if $ca != $cb;

	for ($i = $len_a; $i >= $len_same; $i--) {
		my $k = "$A[$i]-$i";
		# a unique ID is constructed from func-depth-etime;
		# func-depth isn't unique, it may be repeated later.
		$Node{"$k-$v-$ca"}->{stime} = $Tmp{$k}->{stime};
		delete $Tmp{$k}->{stime};
		delete $Tmp{$k};
	}

	for ($i = $len_same; $i <= $len_b; $i++) {
		my $k = "$B[$i]-$i";
		$Tmp{$k}->{stime} = $v;
	}
}

# Parse input
my @Data = <>;
my $laststack = "";
my $lastcpu = 0;
my $time = 0;
foreach (sort @Data) {
	chomp;
	my ($stack, $cpu, $samples) = split ' ';
	$stack = ",$stack";
	next unless defined $samples;
	flow($laststack, $stack, $lastcpu, $cpu, $time);
	$time += $samples;
	$laststack = $stack;
	$lastcpu = $cpu;
}
flow($laststack, "", $lastcpu, 0, $time);
$timemax = $time or die "ERROR: No stack counts found\n";

# Draw canvas
my $widthpertime = ($imagewidth - 2 * $xpad) / $timemax;
my $imageheight = ($depthmax * $frameheight) + $ypad1 + $ypad2;
my $im = SVG->new();
$im->header($imagewidth, $imageheight);
my $inc = <<INC;
<defs >
	<linearGradient id="background" y1="0" y2="1" x1="0" x2="0" >
		<stop stop-color="#eeeeee" offset="5%" />
		<stop stop-color="#eeeeb0" offset="95%" />
	</linearGradient>
</defs>
<style type="text/css">
	rect[rx]:hover { stroke:black; stroke-width:1; }
	text:hover { stroke:black; stroke-width:1; stroke-opacity:0.35; }
</style>
<script type="text/ecmascript">
<![CDATA[
	var details;
	function init(evt) { details = document.getElementById("details").firstChild; }
	function s(info) { details.nodeValue = info; }
	function c() { details.nodeValue = ' '; }
]]>
</script>
INC
$im->include($inc);
$im->filledRectangle(0, 0, $imagewidth, $imageheight, 'url(#background)');
my ($white, $black, $vvdgrey, $vdgrey) = (
	$im->colorAllocate(255, 255, 255),
	$im->colorAllocate(0, 0, 0),
	$im->colorAllocate(40, 40, 40),
	$im->colorAllocate(160, 160, 160),
    );

# Draw frames
foreach my $id (keys %Node) {
	my ($func, $depth, $etime, $cpu) = split "-", $id;
	die "missing start for $id" if !defined $Node{$id}->{stime};
	my $stime = $Node{$id}->{stime};
	my $samples = $etime - $stime;

	my $x1 = $xpad + $stime * $widthpertime;
	my $x2 = $xpad + $etime * $widthpertime;
	my $width = $x2 - $x1;
	next if $width < $minwidth;

	my $y1 = $imageheight - $ypad2 - ($depth + 1) * $frameheight + 1;
	my $y2 = $imageheight - $ypad2 - $depth * $frameheight;

	my $info;
	if ($func eq "" and $depth == 0) {
		$info = "all ($samples ms, 100%)";
	} else {
		my $pct = sprintf "%.2f", ((100 * $samples) / $timemax);
		$info = "$func ($samples ms, $pct%)";
	}
	my $color = $cpu ? "hot" : "cold";
}

print $im->svg;
