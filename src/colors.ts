import MersenneTwister from "mersenne-twister";
import { WOBBLE } from "./constants";
import { colord } from "colord";

export function hueShift(colors: string[], generator: MersenneTwister) {
  const amount = generator.random() * 30 - WOBBLE / 2;

  const rotate = (hex: string) => colord(hex).rotate(amount).toHex();

  return colors.map(rotate);
}
