import React, {useState} from 'react';
import {css} from '@emotion/react';

import playIcon from './play.svg';
import logOutIcon from './log_out.svg';
import settingsIcon from './settings.svg';
import copyReferralCodeIcon from './copy_referral_code.svg';
import walletIconW from './wallet-white.svg';
import walletIconB from './wallet-blue.svg';

import {MessageBox} from './../../MessageBox';
import {Popup} from './../../Popup Window';

import {useHistory} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {writeStorage} from '@rehooks/local-storage';

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  max-width: 500px;

  width: 20vw;
  bottom: 20px;
  position: absolute;
  min-width: 327px;

  font-family: 'Poppins', sans-serif;

  color: #f4f4f4;

  .card {
    padding: 20px 15px;

    background: #1b1b1b;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 6px;

    .tooltip {
      position: relative; /* making the .tooltip span a container for the tooltip text */
      &:hover {
        span::before {
          font-size: 1rem;
          content: attr(data-text); /* here's the magic */
          position: absolute;
          z-index: 99;
          /* vertically center */
          top: 50%;
          transform: translateY(-50%);

          /* move to right */
          left: 50%;
          margin-left: 15px; /* and add a small left margin */

          /* basic styles */
          padding: 10px;
          border-radius: 6px;
          background: #000;
          opacity: 80%;
          color: #fff;
          text-align: center;
          width: 100px;
          display: block;
        }
        span:hover {
          display: none;
        }
      }
    }
    .walletIcon {
      display: none;
    }

    img {
      width: 30px;
    }

    @media screen and (max-width: 860px) {
      width: 300px;
      .tooltip {
        position: relative; /* making the .tooltip span a container for the tooltip text */
        &:hover {
          span::before {
            display: none;
          }
          span:hover {
            display: none;
          }
        }
      }
      .walletIcon {
        display: block;
      }
      .playIcon {
        display: none;
      }
    }

    @media screen and (max-width: 470px) {
      width: 250px;
    }
  }

  @media screen and (max-width: 860px) {
    order: 0;
    position: static;
    top: auto;
    bottom: auto;
    width: auto;
    min-width: 0;
  }
`;

export interface Props {
  /**
   * User's referral code
   */
  referralCode: string;

  bankState?: boolean;
  setBankState?: Function;

  auth: any;
}

export const Bottom = (props: Props) => {
  // eslint-disable-next-line react/prop-types
  const {referralCode, auth, bankState, setBankState} = props;
  const history = useHistory();

  const [message, setMessage] = useState<string>(
    'Referral something something',
  );
  const [toggle, setToggle] = useState<boolean>(false);
  const [popupState, setPopupState] = useState<boolean>(false);

  function signOutFnc() {
    auth.signOut();
    writeStorage('path', '/home');
    history.push('/home');
  }

  const messageBoxProps = {
    toggle: toggle,
    message: message,
    setToggle: setToggle,
  };

  const popupProps = {
    show: popupState,
    setState: setPopupState,
    type: 'signOut',
    signOut: signOutFnc,
  };

  const setMessageBox = (msg: string) => {
    setMessage(msg);
    setToggle(true);
  };

  return (
    <>
      <main css={style}>
        <div className="card">
          <div className="tooltip walletIcon">
            <span data-text="Bank"></span>
            <img
              src={`${bankState ? walletIconB : walletIconW}`}
              onClick={() => {
                setBankState(!bankState);
              }}
            />
          </div>
          <div className="tooltip settingsIcon">
            <span data-text="Setting"></span>
            <img
              src={settingsIcon}
              onClick={() => {
                history.push('/settings');
              }}
            />
          </div>
          <div className="tooltip signOutIcon">
            <span data-text="Sign Out"></span>
            <img
              src={logOutIcon}
              onClick={() => {
                // auth.signOut();
                // writeStorage('path', '/home');
                // history.push('/home');
                setPopupState(true);
              }}
            />
          </div>
          <div className="tooltip copyReferralCodeIcon">
            <span data-text="Copy Referral Code"></span>
            <CopyToClipboard text={referralCode}>
              <img
                src={copyReferralCodeIcon}
                onClick={() => {
                  setMessageBox('Referral code copied to clipboard');
                }}
              />
            </CopyToClipboard>
          </div>
          <div className="tooltip playIcon">
            <span data-text="Go to Jackpot"></span>
            <img
              src={playIcon}
              onClick={() => {
                setMessageBox("You haven't joined any games yet");
              }}
            />
          </div>
        </div>
      </main>
      <MessageBox {...messageBoxProps} />
      <Popup {...popupProps} />
    </>
  );
};
