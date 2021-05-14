import {css} from '@emotion/react';
import React, {useState, useEffect} from 'react';
import notificationIcon from './notification-icon.svg';
import closeIcon from './close-icon.svg';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  .messageBox {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    width: 420px;
    height: 100px;

    position: absolute;
    bottom: 30px;
    right: 30px;

    border-radius: 6px;
    background: #121212;

    .text {
      font-family: 'Roboto', sans-serif;
      font-size: 1.1em;
      color: #f4f4f4;
    }

    .closeIcon {
      width: 13px;
    }
  }
  .show {
    opacity: 1;
  }
  .hide {
    opacity: 0;
  }
`;

export interface Props {
  /**
   * The message
   */
  message: string;
  /**
   * Show or Hide Message Box
   */
  toggle: boolean;
  /**
   * Function to toggle between Show and Hide classes
   */
  setToggle: Function;
}

export function MessageBox(props: Props) {
  //fetch props
  const {
    message = 'Referral code copied to clipboard',
    toggle,
    setToggle,
  } = props;

  //required to kill component and stop timer
  if (!toggle) {
    return null;
  }

  return (
    <main css={style}>
      <article className={`messageBox ${toggle ? 'show' : 'hide'}`}>
        <img src={notificationIcon} alt="Notification Icon" />
        <p className="text">{message}</p>
        <CountdownCircleTimer
          size={45}
          onComplete={() => {
            setToggle(false);
          }}
          strokeLinecap={'square'}
          strokeWidth={4}
          trailColor={`#003d77`}
          isPlaying={toggle}
          duration={10}
          colors={[['#0084ff', 1]]}
        >
          <img
            src={closeIcon}
            alt="Close Icon"
            className="closeIcon"
            onClick={() => {
              setToggle(false);
            }}
          />
        </CountdownCircleTimer>
      </article>
    </main>
  );
}
