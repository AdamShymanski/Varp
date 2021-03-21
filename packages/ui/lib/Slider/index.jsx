import { css } from "@emotion/react";
import React from "react";

const style = css`
  --thumb-width: 18px;
  --thumb-color: #fff;
  --track-background: #5c5c5c;
  --output-color: #fff;
  input {
    width: 100%;
    margin: 4px 0;
    background-color: transparent;
    -webkit-appearance: none;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-runnable-track,
    &::-moz-range-track {
      background: var(--track-background);
      border: 0.2px solid #010101;
      border-radius: 1px;
      width: 100%;
      height: 25px;
      cursor: pointer;
    }
    &::-webkit-slider-thumb,
    &::-moz-range-thumb {
      width: var(--thumb-width);
      border: none;
      border-radius: 1px;
      height: 35px;
      background: var(--thumb-color);
      cursor: pointer;
      -webkit-appearance: none;
    }
    &:focus::-webkit-slider-runnable-track {
      background: var(--track-background);
    }
  }
  output {
    display: inline-flex;
    box-sizing: content-box;
    justify-content: center;
    align-items: center;
    padding-left: calc(
      var(--ratio) - var(--thumb-width) / calc(var(--max) / var(--value))
    );
    width: var(--thumb-width);
    color: var(--output-color);
    margin-bottom: 8px;
  }
`;

export const Slider = ({ max, min, defaultValue, innerRef, ...props }) => {
  const [value, setValue] = React.useState(defaultValue ? defaultValue : 0);
  const ratio = (100 / (max - 1)) * (value - min);
  return (
    <div
      css={[
        css`
          --value: ${value};
          --ratio: ${ratio}%;
          --max: ${max};
        `,
        style,
      ]}
    >
      <output>{value}</output>
      <input
        max={max}
        min={min}
        type="range"
        {...props}
        value={value}
        ref={innerRef}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
};