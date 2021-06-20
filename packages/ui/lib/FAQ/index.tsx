import {css} from '@emotion/react';
import React from 'react';

import goToIcon from './go_to.svg';
const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: 90px;
    padding: 0 20px;
    margin-bottom: 20px;

    font-family: 'Poppins', sans-serif;
    background: #121212;
    color: #f4f4f4;

    background-color: $dark-gray;
    border-radius: 3px;
  }

  .last {
    margin-bottom: 0;
  }

  .textSection {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 7px 0;
    h1 {
      font-size: 1.4em;
    }
    p {
      color: #5c5c5c;
    }
  }
  img {
    width: 5%;
  }
`;

export interface Props {
  header: string;
  text: string;
  last?: boolean;
}

export const Answer = (props: Props) => {
  const {
    header = 'Is Varp free?',
    text = 'Yes, Varp is free forever. We run ads to make money',
    last,
  } = props;
  return (
    <main css={style}>
      <div className={`${last ? 'last' : ''}`}>
        <section className="textSection">
          <h1>{header}</h1>
          <p>{text}</p>
        </section>
        <img src={goToIcon} alt="goToIcon" />
      </div>
    </main>
  );
};
