import { css } from "@emotion/react";
import React, { ReactElement } from "react";

export enum ChallengeStatus {
  START = "Start",
  RESUME = "Resume"
}

export interface Props {
  /**
   * The attempt state of the challenge
   */
  status: ChallengeStatus
}

const style = css`
  color: white;
  display: flex;
`;

export function ActionBar({ status }: Props): ReactElement {
  return (
    <div css={style}>
      <button>{status}</button>
    </div>
  );
}
