import {css} from '@emotion/react';
import React from 'react';

import tagIcon from './tag.svg';
import clockIcon from './clock.svg';
import calendarIcon from './calendar.svg';
import tokenIcon from './triangle.svg';
import dollarSignIcon from './dollar_sign.svg';

import {Button} from './../../Button';

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  max-width: 500px;

  font-family: 'Poppins', sans-serif;
  color: #f4f4f4;

  .button {
    position: relative;

    margin-bottom: 20px;
  }
  .card {
    width: 20vw;
    border-left: 3px solid #0082ff;

    padding-left: 15px;
    margin: 10px 0;
    margin-bottom: 12px;
  }
  h1 {
    font-weight: 500;
    font-size: 2em;
    margin-bottom: 10px;
  }
  .grid {
    display: grid;
    grid-template-columns: 115px 115px;
    grid-template-rows: 30px 30px;
  }
  .grid div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .grid div .icon {
    width: 1em;
    margin-right: 12px;
  }
  .tokenIcon {
    width: 10px;
    width: 0.8em;
    margin-left: 3px;
  }
`;

export interface Props {
  title: string;
  date: string;
  time: string;
  price: number;
  reward: number;
}

export const GameCard = (props: Props) => {
  const {
    title = 'End It Fast',
    date = 'April 2nd',
    time = '2:30pm',
    reward = 214,
    price = 135,
  } = props;
  return (
    <main css={style}>
      <div className="card">
        <h1>{title}</h1>
        <div className="grid">
          <div>
            <img className="icon" src={calendarIcon} />
            <p>{date}</p>
          </div>
          <div>
            <img className="icon" src={clockIcon} />
            <p>{time}</p>
          </div>
          <div>
            <img className="icon" src={tagIcon} />
            <p>{price}</p>
            <img className="tokenIcon" src={tokenIcon} />
          </div>
          <div>
            <img className="icon" src={dollarSignIcon} />
            <p>{reward}</p>
          </div>
        </div>
      </div>
      <Button children="Join" variant="primary" size="small" />
      <div className="divider" />
    </main>
  );
};
