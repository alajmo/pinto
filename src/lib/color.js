export {
  rgbToHsb,
  rgbToHex,
  hsbToHex,
  hsbToRgb,
  hexToRgb,
  hexToHsb,
  hexToX256,
  printHsl,
  printHex,
  handleNullColor,
};

function rgbToHex(rgb) {
  const hex = rgb.map(x => x.toString(16));
  return '#' + hex.map(x => x.padStart(2, '0')).join('');
}

function rgbToHsb(r, g, b) {
  let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc;
  rabs = r / 255;
  gabs = g / 255;
  babs = b / 255;
  (v = Math.max(rabs, gabs, babs)), (diff = v - Math.min(rabs, gabs, babs));
  diffc = c => (v - c) / 6 / diff + 1 / 2;
  if (diff == 0) {
    h = s = 0;
  } else {
    s = diff / v;
    rr = diffc(rabs);
    gg = diffc(gabs);
    bb = diffc(babs);

    if (rabs === v) {
      h = bb - gg;
    } else if (gabs === v) {
      h = 1 / 3 + rr - bb;
    } else if (babs === v) {
      h = 2 / 3 + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)];
}

function hsbToRgb(h, s, v) {
  h = h / 360;
  s = s / 100;
  v = v / 100;

  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
    (s = h.s), (v = h.v), (h = h.h);
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hsbToHex(hsl) {
  const rgb = hsbToRgb(hsl);
  const hex = rgbToHex(rgb);

  return hex;
}

function hexToRgb(hex) {
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(rgb[1], 16), parseInt(rgb[2], 16), parseInt(rgb[3], 16)];
}

function hexToHsb(hex) {
  hex = hex.trim();

  const rgb = hexToRgb(hex);
  const hsl = rgbToHsb(rgb);

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
      ? num.toFixed(decimals).replace(/0+$/, '').replace(/\.$/, '')
      : num.toString();
  return str || '0';
}

function handleNullColor(hex) {
  return hex === null ? 'NONE' : hex;
}

// Convert RGB24 to xterm-256 8-bit value
// For simplicity, assume RGB space is perceptually uniform.
// There are 5 places where one of two outputs needs to be chosen when the
// input is the exact middle:
// - The r/g/b channels and the gray value: the higher value output is chosen.
// - If the gray and color have same distance from the input - color is chosen.
function hexToX256(hex) {
  if (hex === null) {
    return 'NONE';
  }

  const [r, g, b] = hexToRgb(hex);
  // Calculate the nearest 0-based color index at 16 .. 231
  const v2ci = v => {
    if (v < 48) {
      return 0;
    } else if (v < 115) {
      return 1;
    } else {
      return Math.trunc((v - 35) / 40);
    }
  };

  const ir = v2ci(r);
  const ig = v2ci(g);
  const ib = v2ci(b);
  const colorIndex = 36 * ir + 6 * ig + ib;

  // Calculate the nearest 0-based gray index at 232 .. 255
  const average = Math.trunc((r + g + b) / 3);
  const grayIndex = average > 238 ? 23 : Math.trunc((average - 3) / 10);

  // Calculate the represented colors back from the index
  const i2cv = [0, 0x5f, 0x87, 0xaf, 0xd7, 0xff];
  const cr = i2cv[ir];
  const cg = i2cv[ig];
  const cb = i2cv[ib];
  const gv = 8 + 10 * grayIndex;

  // Return the one which is nearer to the original input rgb value
  const distSquare = (A, B, C, a, b, c) => {
    return (A - a) * (A - a) + (B - b) * (B - b) + (C - c) * (C - c);
  };
  const colorErr = distSquare(cr, cg, cb, r, g, b);
  const grayErr = distSquare(gv, gv, gv, r, g, b);

  return colorErr <= grayErr ? 16 + colorIndex : 232 + grayIndex;
}
