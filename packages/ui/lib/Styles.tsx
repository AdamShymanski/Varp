import React from "react";
import { css, Global } from "@emotion/react";
import {
  normalize,
  shade,
  tint
} from "polished";

interface ColorMap {
  [key: string]: string;
}

const colors: ColorMap = {
  primary: "#0084ff",
  greybg: "#1b1b1b",
  blackbox: "#121212",
  smoky: "#f4f4f4",
  lightgrey: "#5c5c5c",
  white: "#ffffff"
};

/**
 * 
 * @param colors a ColorMap of colors
 * @returns a string of css variables
 * --color-primary100: #hex;
 * --color-primary200: #hex;
 * ...
 * --color-primary900: #hex;
 * 500 is the original color and color increases in
 * darkness as value increases.
 */

const makeColorVariants = (colors: ColorMap): string => {
  let styles = "";
  for (let opacity = 10; opacity < 100; opacity += 10) {
    let func;
    if (opacity < 50) {
      func = tint;
    } else if (opacity == 50) {
      func = (amount: number, el: string) => el;
    } else {
      func = shade;
    }
    for (const color in colors) {
      if (Object.prototype.hasOwnProperty.call(colors, color)) {
        const element = colors[color];
        styles += `--color-${color + opacity*10}: ${func(
          Math.abs(opacity-50) / 100,
          element
        )};\n`;
      }
    }
  }
  return styles;
};


export const styles = css`
  :root {
    --font-sans-serif: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    ${makeColorVariants(colors)}
  }
`;

export const Styles = () => <Global styles={[normalize(), styles]} />;
