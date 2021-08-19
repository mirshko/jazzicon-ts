import MersenneTwister from 'mersenne-twister';
import { WOBBLE } from './constants';

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

export function hueShift(colors: string[], generator: MersenneTwister) {
  const amount = generator.random() * 30 - WOBBLE / 2;

  const rotate = (hex: string) => colorRotate(hex, amount);

  return colors.map(rotate);
}

export function colorRotate(hex: string, degrees: number) {
  const hsl = HexToHSL(hex);

  let hue = hsl.h;
  hue = (hue + degrees) % 360;
  hue = hue < 0 ? 360 + hue : hue;

  hsl.h = hue;

  return HSLToHex(hsl);
}

function HexToRGB(hex: string): RGB {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return { r, g, b };
}

function HexToHSL(hex: string): HSL {
  let { r, g, b } = HexToRGB(hex);

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;

  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;

  let h = 0;
  let s = 0;
  let l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

function HSLToHex(hsl: HSL): string {
  let { h, s, l } = hsl;

  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Having obtained RGB, convert channels to hex
  let r_hex = Math.round((r + m) * 255).toString(16);
  let g_hex = Math.round((g + m) * 255).toString(16);
  let b_hex = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r_hex.length == 1) r_hex = '0' + r_hex;
  if (g_hex.length == 1) g_hex = '0' + g_hex;
  if (b_hex.length == 1) b_hex = '0' + b_hex;

  return '#' + r + g + b;
}
