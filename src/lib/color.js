export { hexToHsl, hslToHex, printHsl, printHex };

function rgbToHex(rgb) {
  const hex = rgb.map((x, i) => x.toString(16));
  return '#' + hex.map(x => x.padStart(2, '0')).join('');
}

function rgbToHsl([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}

function hslToRgb([h, s, l]) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = function(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s,
      p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const rgb = [r * 255, g * 255, b * 255].map(Math.round);

  return rgb;
}

function hslToHex(hsl) {
  const rgb = hslToRgb(hsl);
  const hex = rgbToHex(rgb);

  return hex;
}

function hexToRgb(hex) {
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(rgb[1], 16), parseInt(rgb[2], 16), parseInt(rgb[3], 16)];
}

function hexToHsl(hex) {
  hex = hex.trim();

  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);

  return hsl;
}

function printHsl(hsl) {
  const mults = [360, 100, 100];
  const suff = ['', '%', '%'];

  const vals = hsl.map(
    (x, i) => printNumber(x * mults[i], i === 3 ? 3 : 1) + suff[i],
  );

  return `hsl(${vals})`;
}

function printHex(hex) {
  return hex.substring(0, 7);
}

function printNumber(num, decimals = 1) {
  const str =
    decimals > 0
      ? num
          .toFixed(decimals)
          .replace(/0+$/, '')
          .replace(/\.$/, '')
      : num.toString();
  return str || '0';
}
