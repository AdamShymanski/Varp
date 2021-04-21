import { css } from "@emotion/react";
import React, { ReactElement } from "react";

export interface Props {
  /**
   * The text of the description
   */
  children: React.ReactNode;
}

const style = css`
  line-height: 24px;
  max-width: 415px;
  margin-top: 10px;

  color: #959595;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;

export function Description({ children }: Props): ReactElement {
  return (
    <div css={style}>
      <p>{children}</p>
    </div>
  );
}
