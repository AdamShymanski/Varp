import {css} from '@emotion/react';
import React, {useState} from 'react';

// import tagIcon from './tag.svg';
// import calendarIcon from './calendar.svg';
// import tokenIcon from './triangle.svg';

import jackpotIcon from './jackpot.svg';

import dollarSignIcon from './dollar_sign.svg';
import clockIcon from './clock.svg';
import usersIcon from './users.svg';
import eyeIcon from './eye.svg';

import {Button} from './../../Button';
import {MessageBox} from './../../MessageBox';

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

  margin-top: 15px;

  .button {
    position: relative;

    margin-bottom: 20px;
  }
  .card {
    width: 20vw;
    border-left: 3px solid #0082ff;

    border-radius: 1.5px 0 0 1.5px;

    padding-left: 15px;
    margin: 10px 0;
    margin-bottom: 12px;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    .jackpotIcon {
      width: 100px;
      margin-left: 20px;
    }
  }
  h1 {
    font-weight: 500;
    font-size: 1.8em;
    position: relative;
    bottom: 8px;
  }
  .grid {
    display: grid;
    grid-template-columns: 90px 90px;
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
    width: 0.8em;
    margin-left: 3px;
  }
`;

export interface Props {
  title: string;
  time: string;
  reward: number;
  players: number;
  spectators: number;
}

export const GameCard = (props: Props) => {
  const {title, time, reward, players, spectators} = props;

  const [toggle, setToggle] = useState<boolean>(false);

  const messageBoxProps = {
    toggle: toggle,
    message: "This page isn't ready yet",
    setToggle: setToggle,
  };

  const setMessageBox = () => {
    setToggle(true);
  };

  return (
    <>
      <main css={style}>
        <div className="card">
          <div>
            <h1>{title}</h1>
            <div className="grid">
              <div>
                <img className="icon" src={usersIcon} />
                <p>{players}</p>
              </div>
              <div>
                <img className="icon" src={clockIcon} />
                <p>{time}</p>
              </div>
              <div>
                <img className="icon" src={eyeIcon} />
                <p>{spectators}</p>
              </div>
              <div>
                <img className="icon" src={dollarSignIcon} />
                <p>{reward}</p>
              </div>
            </div>
          </div>
          <img className="jackpotIcon" src={jackpotIcon} alt={'Jackpot Icon'} />
        </div>
        <Button
          variant="primary"
          size="small"
          action={() => {
            setMessageBox();
          }}
        >
          Join
        </Button>
        <div className="divider" />
      </main>
      <MessageBox {...messageBoxProps} />
    </>
  );
};
