import {css} from '@emotion/react';
import React, {ReactElement} from 'react';

export enum ChallengeType {
  WATCH_AD = 'Watching video ad',
}

import clock from './clock.svg';
import task from './task.svg';
import token from './triangle.svg';

export interface Props {
  /**
   * The estimated time to complete in minutes
   */
  minutes: number;
  /**
   * The type of challenge
   */
  type: ChallengeType;
  /**
   * The number of tokens earned for completing the challenge
   */
  reward: number;
}

const style = css`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  ul {
    padding: 0;
    margin-top: 22px;

    color: #f4f4f4;
    list-style: none;
    font-family: 'Poppins', sans-serif;

    img {
      position: relative;
      left: 0;
      margin-right: 10px;
    }
    li {
      margin-top: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-space-between;
      align-items: flex-start;
    }
  }
`;

export function Details({minutes, type, reward}: Props): ReactElement {
  return (
    <div css={style}>
      <ul>
        <li>
          <img src={clock} />
          {minutes} minutes
        </li>
        <li>
          <img src={task} />
          {type}
        </li>
        <li>
          <img src={token} />
          {reward} tokens
        </li>
      </ul>
    </div>
  );
}
