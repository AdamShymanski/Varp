import {css} from '@emotion/react';
import React, {ReactElement} from 'react';
import {Button} from '../../Button';

export enum ChallengeStatus {
  START = 'Start',
  RESUME = 'Resume',
}

export interface Props {
  /**
   * The attempt state of the challenge
   */
  status: ChallengeStatus;
}

const style = css`
  margin-top: 10px;
  color: white;
  display: flex;
`;

const buttonProps = {
  variant: 'text',
  size: 'medium',
  children: 'Start',
};

export function ActionBar({status}: Props): ReactElement {
  return (
    <div css={style}>
      <Button {...buttonProps} />
    </div>
  );
}
