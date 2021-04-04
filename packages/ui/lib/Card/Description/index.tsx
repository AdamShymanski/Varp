import { css } from "@emotion/react";
import React, { ReactElement } from "react";

export interface Props {
  /**
   * The text of the description
   */
  children: React.ReactNode;
}

const style = css`
  color: var(--color-white900);
  font-family: var(--font-sans-serif);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  max-width: 415px;
`;

export function Description({ children }: Props): ReactElement {
  return (
    <div css={style}>
      <p>{children}</p>
    </div>
  );
}
