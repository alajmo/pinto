export {
  redSquare,
  redRightSquare,
  greenSquare,
  greenRightSquare,
  blueSquare,
  blueRightSquare,
  hueSquare,
  hueRightSquare,
  saturationSquare,
  saturationRightSquare,
  brightnessSquare,
  brightnessRightSquare,
  getColorIndicesForCoord,
};

function redSquare({
  elementId = 'color-cube-canvas',
  width = 202,
  red = 0,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, width);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let index = (x + y * width) * pxWidth;

      const yColor = greenBlueColor(x, y, width);

      data[index] = red;
      data[index + 1] = yColor[0];
      data[index + 2] = yColor[1];
      data[index + 3] = alpha;
    }
  }
  ctx.putImageData(image, 0, 0);

  return data;
}

function redRightSquare({
  elementId = 'color-cube-1d',
  width = 20,
  height = 202,
  green = 0,
  blue = 0,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, height);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * pxWidth;

      const red = Math.floor(((height - y) / height) * 255);

      data[index] = red;
      data[index + 1] = green;
      data[index + 2] = blue;
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);

  return data;
}

function greenBlueColor(x, y, width) {
  const green = Math.round(((x + 1) / width) * 255);
  const blue = Math.round(((width - y + 1) / width) * 255);
  return [green, blue];
}

function greenSquare({
  elementId = 'color-cube-canvas',
  width = 202,
  green = 0,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, width);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let index = (x + y * width) * pxWidth;

      const yColor = redBlueColor(x, y, width);

      data[index] = yColor[0];
      data[index + 1] = green;
      data[index + 2] = yColor[1];
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);
}

function greenRightSquare({
  elementId = 'color-cube-1d',
  width = 20,
  height = 202,
  red = 0,
  blue = 0,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, height);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * pxWidth;

      const green = Math.floor(((height - y) / height) * 255);

      data[index] = red;
      data[index + 1] = green;
      data[index + 2] = blue;
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);

  return data;
}

function redBlueColor(x, y, width) {
  const red = Math.round(((x + 1) / width) * 255);
  const blue = Math.round(((width - y + 1) / width) * 255);
  return [red, blue];
}

function blueSquare({
  elementId = 'color-cube-canvas',
  width = 202,
  blue = 0,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, width);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let index = (x + y * width) * pxWidth;

      const yColor = redGreenColor(x, y, width);

      data[index] = yColor[0];
      data[index + 1] = yColor[1];
      data[index + 2] = blue;
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);
}

function blueRightSquare({
  elementId = 'color-cube-1d',
  width = 20,
  height = 202,
  red = 0,
  green = 0,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, height);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * pxWidth;

      const blue = Math.floor(((height - y) / height) * 255);

      data[index] = red;
      data[index + 1] = green;
      data[index + 2] = blue;
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);

  return data;
}

function redGreenColor(x, y, width) {
  const red = Math.round(((x + 1) / width) * 255);
  const green = Math.round(((width - y + 1) / width) * 255);
  return [red, green];
}

function hueSquare({
  elementId = 'color-cube-canvas',
  width = 202,
  hue = 0,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, width);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let index = (x + y * width) * pxWidth;

      const sv = saturationBrightness(x, y, width);
      const rgb = hsv2rgb(hue, ...sv);

      data[index] = rgb[0];
      data[index + 1] = rgb[1];
      data[index + 2] = rgb[2];
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);
}

function hueRightSquare({
  elementId = 'color-cube-1d',
  width = 20,
  height = 202,
  saturation = 100,
  brightness = 100,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, height);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * pxWidth;

      const hue = Math.floor(((height - y) / height) * 360);
      const rgb = hsv2rgb(hue, saturation / 100, brightness / 100);

      data[index] = rgb[0];
      data[index + 1] = rgb[1];
      data[index + 2] = rgb[2];
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);

  return data;
}

function saturationBrightness(x, y, width) {
  const saturation = ((x + 1) / width) * 1;
  const value = ((width - y + 1) / width) * 1;
  return [saturation, value];
}

function saturationSquare({
  elementId = 'color-cube-canvas',
  width = 202,
  saturation,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, width);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let index = (x + y * width) * pxWidth;

      const hb = hueBrightnessColor(x, y, width);
      const rgb = hsv2rgb(hb[0], saturation / 100, hb[1]);

      data[index] = rgb[0];
      data[index + 1] = rgb[1];
      data[index + 2] = rgb[2];
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);
}

function saturationRightSquare({
  elementId = 'color-cube-1d',
  width = 20,
  height = 202,
  hue = 360,
  brightness = 100,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, height);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * pxWidth;

      const saturation = Math.floor(((height - y) / height) * 100);
      const rgb = hsv2rgb(hue, saturation / 100, brightness / 100);

      data[index] = rgb[0];
      data[index + 1] = rgb[1];
      data[index + 2] = rgb[2];
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);

  return data;
}

function hueBrightnessColor(x, y, width) {
  const saturation = ((x + 1) / width) * 360 * 1;
  const value = ((width - y + 1) / width) * 1;
  return [saturation, value];
}

function brightnessSquare({
  elementId = 'color-cube-canvas',
  width = 202,
  brightness,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, width);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      let index = (x + y * width) * pxWidth;

      const hs = hueSaturationColor(x, y, width);
      const rgb = hsv2rgb(hs[0], hs[1], brightness / 100);

      data[index] = rgb[0];
      data[index + 1] = rgb[1];
      data[index + 2] = rgb[2];
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);
}

function brightnessRightSquare({
  elementId = 'color-cube-1d',
  width = 20,
  height = 202,
  hue = 360,
  saturation = 100,
  alpha = 255,
} = {}) {
  const canvas = document.getElementById(elementId);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(width, height);
  const { data } = image;

  const pxWidth = 4;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * pxWidth;

      const brightness = Math.floor(((height - y) / height) * 100);
      const rgb = hsv2rgb(hue, saturation / 100, brightness / 100);

      data[index] = rgb[0];
      data[index + 1] = rgb[1];
      data[index + 2] = rgb[2];
      data[index + 3] = alpha;
    }
  }

  ctx.putImageData(image, 0, 0);

  return data;
}

function hueSaturationColor(x, y, width) {
  const saturation = ((x + 1) / width) * 360 * 1;
  const value = ((width - y + 1) / width) * 1;
  return [saturation, value];
}

function getColorIndicesForCoord(x, y, width) {
  const red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
}

// hue in range [0, 360]
// saturation, value in range [0,1]
// return [r,g,b] each in range [0,255]
// See: https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
function hsv2rgb(hue, saturation, value) {
  let chroma = value * saturation;
  let hue1 = hue / 60;
  let x = chroma * (1 - Math.abs((hue1 % 2) - 1));
  let r1, g1, b1;
  if (hue1 >= 0 && hue1 <= 1) {
    [r1, g1, b1] = [chroma, x, 0];
  } else if (hue1 >= 1 && hue1 <= 2) {
    [r1, g1, b1] = [x, chroma, 0];
  } else if (hue1 >= 2 && hue1 <= 3) {
    [r1, g1, b1] = [0, chroma, x];
  } else if (hue1 >= 3 && hue1 <= 4) {
    [r1, g1, b1] = [0, x, chroma];
  } else if (hue1 >= 4 && hue1 <= 5) {
    [r1, g1, b1] = [x, 0, chroma];
  } else if (hue1 >= 5 && hue1 <= 6) {
    [r1, g1, b1] = [chroma, 0, x];
  }

  let m = value - chroma;
  let [r, g, b] = [r1 + m, g1 + m, b1 + m];

  // Change r,g,b values from [0,1] to [0,255]
  return [Math.round(255 * r), Math.round(255 * g), Math.round(255 * b)];
}
