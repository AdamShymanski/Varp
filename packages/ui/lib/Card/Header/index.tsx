import { css } from "@emotion/react";
import React, { ReactElement } from "react";

export interface Props {
  /**
   * The title text of the header
   */
  title: string;
  /**
   * An optional image to display in the header
   */
  thumbnail?: string;
}

const style = css`
  display: flex;
  align-items: center;

  color: #ffffff;
  font-family: "Poppins", sans-serif;
  h2 {
    margin: 0;
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
  }
  img {
    margin-right: 24px;
    width: 65px;
    height: 65px;
  }
`;

export function Header({ title, thumbnail }: Props): ReactElement {
  return (
    <div css={style}>
      {thumbnail && <img src={thumbnail} alt="" />}
      <h2>{title}</h2>
    </div>
  );
}
