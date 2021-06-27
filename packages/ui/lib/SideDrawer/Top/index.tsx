import {css} from '@emotion/react';
import React from 'react';

import tokenIcon from './token_icon_circle.svg';
import litIcon from './lit.svg';
import referralIcon from './referral_program 1.svg';
import surveyIcon from './Survey.svg';
import loseIcon from './lose_icon.svg';
import profitIcon from './profit_icon.svg';

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
  background: #121212;
  color: #f4f4f4;

  .name {
    width: 20vw;
    background: #1b1b1b;
    padding: 10px 20px;
    margin-top: 20px;

    border-radius: 6px;
    font-weight: 500;
    height: 55px;
    font-size: 1.3em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bank {
    display: flex;
    flex-direction: column;

    border-radius: 6px;
    background: #1b1b1b;

    width: 20vw;
    margin: 10px 0;
    padding: 6px 0 20px 20px;

    .bTitle {
      font-weight: 600;
      font-size: 2.3em;
    }

    .tokenSign {
      width: 1.6em;
      position: relative;
      bottom: 2px;
      margin-right: 10px;
    }

    .tokenContainer {
      line-height: 0.7em;
      margin: 10px 0px 22px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500;

      p {
        font-size: 1.8em;
      }
      .number {
        font-size: 1em;
      }
    }
    .latestActionContainer {
      align-self: flex-end;
      display: flex;
      flex-direction: row;
      margin-bottom: 1px;
      img {
        position: relative;
        bottom: 2.5px;
        margin-left: 20px;
        margin-right: 5px;
        width: 1em;
      }
    }

    .invisible {
      display: none;
    }

    .bonus {
      font-size: 1.5em;
      > p {
        font-size: 0.7em;
        font-weight: 500;
        margin-bottom: 5px;
        width: 4em;
      }
    }
    .scoreBar {
      width: 75%;
      height: 32px;
      display: flex;
      flex-direction: row;
      box-shadow: 0 0 0 2px #5c5c5c inset;
      border-radius: 6px;
      font-weight: 500;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      p {
        font-size: 0.7em;
      }
    }
    .bar {
      position: relative;
      min-width: 70px;

      &::before {
        content: attr(data-text);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 100%;
        margin-left: 15px;
        width: 200px;
        padding: 10px;
        border-radius: 6px;
        background: #000;
        color: #fff;
        text-align: center;
        display: none;
      }

      .info {
        display: flex;
        height: 100%;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        left: -6px;
        img {
          width: 0.66em;
          display: block;
          float: left;
          margin-left: 12px;
          margin-right: 6px;
        }
        .referralIcon {
          width: 0.75em;
        }
        .surveyIcon {
          width: 0.75em;
        }
      }
      .expander {
        background-color: inherit;
        display: inline-block;
        border-radius: 4px;
        width: 12px;
        height: 100%;
        left: calc(100% - 6px);
        top: 0%;
        position: absolute;
        content: '';
        z-index: -1;
      }
    }
    .dailyStreak {
      z-index: 3;
      background-color: #2cb200;
      border-radius: 4px 0 0 4px;
    }
    .finishedTask {
      z-index: 2;
      background-color: #33cc01;
    }
    .referral {
      z-index: 1;
      background-color: #3be601;
    }
  }
  .bonusInfo {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    > p {
      margin-left: 12px;
      font-size: 0.5em;
    }
  }
  .tooltip {
    position: relative; /* making the .tooltip span a container for the tooltip text */
    &:before {
      font-size: 1rem;
      content: attr(data-text); /* here's the magic */
      position: absolute;
      z-index: 99;
      /* vertically center */
      top: 50%;
      transform: translateY(-50%);

      /* move to right */
      left: 100%;
      margin-left: 15px; /* and add a small left margin */

      /* basic styles */
      width: 200px;
      padding: 10px;
      border-radius: 6px;
      background: #000;
      opacity: 80%;
      color: #fff;
      text-align: center;

      display: none; /* hide by default */
    }
    &:hover:before {
      display: block;
      width: 220px;
    }
  }

  .green {
    color: #43ff00;
  }
  .red {
    color: #f80102;
  }
`;

export interface Props {
  /**
   * Balance of user
   */
  balance: number;
  /**
   * Number of lost or earned tokens
   */
  number: number;
  /**
   * The name of user
   */
  name: string;
  /**
   * Profit or Lose
   */
  profit: boolean;
  /**
   * First Source of Bonus
   */
  dailyStreak: number;
  /**
   * Second Source of Bonus
   */
  referral: number;
  /**
   * Third Source of Bonus
   */
  surveysFinished: number;
}

export const Top = (props: Props) => {
  const {
    balance = 666,
    profit = false,
    name = 'Adam',
    number = 0,
    dailyStreak = 5,
    referral = 5,
    surveysFinished = 5,
    ...rest
  } = props;

  // const getWidth = (value: number, maximum: number) => {
  //
  //   if (width < 0.16) {
  //     return '16%';
  //   }
  //   return `calc(100% * ${width.toString()}`;
  // };

  const getWidth = (value: number) => {
    const width = (1 / 3) * value;

    return '70px';
  };

  return (
    <main css={style}>
      <article className="name">{name}</article>
      <article className="bank">
        <div className="bTitle ">
          <p>Bank</p>
        </div>
        <div className="tokenContainer">
          <img src={tokenIcon} alt="Token Icon" className="tokenSign" />
          <p>{balance}</p>
          <div
            className={`latestActionContainer ${
              number == 0 ? 'invisible' : ''
            }`}
          >
            <img src={`${profit ? profitIcon : loseIcon}`} alt="Profit Icon" />
            <p className={'number ' + (profit ? 'green' : 'red')}>{number}</p>
          </div>
        </div>
        <div className="bonus">
          <p
            className="tooltip"
            data-text="Bonuses increase the amount of tokens you receive after completing a task. Keep your bonuses up by being active every day, inviting your friends to play by sharing your referral code and completing surveys from Varp."
          >
            Bonuses
          </p>
          <div className="bonusInfo">
            <div className="scoreBar">
              <div
                className="bar dailyStreak tooltip"
                data-text={`Bonus by daily streak: ${dailyStreak}%`}
                style={{width: getWidth(dailyStreak)}}
              >
                <div className="info">
                  <img className="dailyStreak" src={litIcon} alt="Lit Icon" />
                  <p className="">{dailyStreak}</p>
                  <p className="">%</p>
                </div>
                <div className="expander"></div>
              </div>
              <div
                className="bar finishedTask tooltip"
                data-text={`Bonus by survey: ${surveysFinished}%`}
                style={{width: getWidth(surveysFinished)}}
              >
                <div className="info">
                  <img
                    src={surveyIcon}
                    alt="Survey Icon"
                    className="surveyIcon"
                  />
                  <p>{surveysFinished}</p>
                  <p className="percentage">%</p>
                </div>
                <div className="expander"></div>
              </div>
              <div
                className="bar referral tooltip"
                data-text={`Bonus by referral: ${referral}%`}
                style={{width: getWidth(referral)}}
              >
                <div className="info">
                  <img
                    className="referralIcon"
                    src={referralIcon}
                    alt="Referral Icon"
                  />
                  <p>{referral}</p>
                  <p className="percentage">%</p>
                </div>
                <div className="expander"></div>
              </div>
            </div>
            <p>max. 30%</p>
          </div>
        </div>
      </article>
    </main>
  );
};
