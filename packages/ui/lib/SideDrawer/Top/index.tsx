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

  font-family: 'Poppins', sans-serif;
  background: #121212;
  color: #f4f4f4;

  .name {
    width: 20vw;

    padding: 10px 0;
    margin: 20px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #1b1b1b;
    border-radius: 8px;
  }
  .bank {
    width: 20vw;

    margin-bottom: 20px;
    padding: 5px 0 15px 20px;

    display: flex;
    flex-direction: column;

    border-radius: 12px;
    background: #1b1b1b;

    font-weight: 500;
    .bankTitle {
      p {
        font-size: 2.3em;
        font-weight: 500;
      }
    }
    img {
      width: 2em;
      margin-right: 10px;
    }
    .tokenContainer {
      line-height: 0.7em;
      margin: 5px 0px 40px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 400;
      .tokenSign {
        width: 1.8em;
      }
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
      img {
        margin-left: 20px;
        margin-right: 2px;
        width: 1em;
      }
    }

    .bonus {
      font-size: 1em;
      font-weight: 500;
      > p {
        margin-bottom: 12px;
        width: 4em;
        }
      }
    }
    .scoreBar {
      width: 80%;
      height: 38px;
      display: flex;
      flex-direction: row;
      box-shadow: 0 0 0 2px #5c5c5c inset;
      border-radius: 4px;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      p {
        font-size: 0.7em;
      }
    }
    .bar {
      position: relative;

      &::before {
        content: attr(data-text);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 100%;
        margin-left: 15px;
        width: 200px;
        padding: 10px;
        border-radius: 10px;
        background: #000;
        color: #fff;
        text-align: center;
        display: none;
      }

      .info {
        display: flex;
        height: 100%;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        left: -6px;
        flex-direction: row;
        img {
          width: 38%;
          margin-left: 12px;
          display: block;
          float: left;
        }
        p {
          font-size: 0.7em;
        }
      }
      .bar {
        position: relative;
        
        &::before {
          content: attr(data-text);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 100%;
          margin-left:15px;
          width:200px;
          padding:10px;
          border-radius:10px;
          background:#000;
          color: #fff;
          text-align:center;
          display:none;
        }
        
        .info{
          img {
            width: 0.7em;
            margin-left: 12px;
            display: block;
            float: left;
          }
          display: flex;
          height: 100%;
          overflow: hidden;
          align-items: center;
          justify-content: center;
          left: -6px;
        }
        .expander {
          background-color: inherit;
          display: inline-block;
          border-radius: 12px;
          width: 12px;
          height: 100%;
          left: calc(100% - 6px);
          top: 0%;
          position: absolute;
          content: "";
          z-index: -1;
        }
      }
      .dailyStreak {
        z-index: 3;
        background-color: #2cb200;
        border-radius: 6px 0 0 6px;
      }
      .referral {
        z-index: 2;
        background-color: #33cc01;
      }
      .finishedTask {
        z-index: 1;
        background-color: #3be601;
      }
    }
    .dailyStreak {
      z-index: 3;
      background-color: #2cb200;
      border-radius: 6px 0 0 6px;
    }
    .referral {
      z-index: 2;
      background-color: #33cc01;
    }
    .finishedTask {
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
      border-radius: 10px;
      background: #000;
      opacity: 80%;
      color: #fff;
      text-align: center;

      display: none; /* hide by default */
    }
    &:hover:before {
      display: block;
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
   * Name of user
   */
  name: string | undefined;
  /**
   * Balance of user
   */
  balance: number;
  /**
   * Number of lost or earned tokens
   */
  number: number;
  /**
   * Profit or Lose
   */
  profit: boolean;
  /**
   * Bonus from Daily Streak
   */
  dailyStreak: number;
  /**
   * Bonus from Referral Program
   */
  referral: number;
  /**
   * Bonus from filling out Surveys
   */
  surveys: number;
}

export const Top = (props: Props) => {
  const {
    name,
    balance,
    profit = true,
    number = 51,
    dailyStreak = 5,
    referral = 5,
    surveys = 5,

    ...rest
  } = props;

  const maxDailyStreak = 10;
  const maxReferral = 10;
  const maxFinishedTask = 10;
  const getWidth = (value: number, maximum: number) => {
    const width = 1/3*(value/maximum)
    if (width < 0.16){
      return '16%';
    }
    return `calc(100% * ${width.toString()}`;
  }
  return (
    <main css={style}>
      <article className="name">{name}</article>
      <article className="bank">
        <div className="bankTitle">
          <p>Bank</p>
        </div>
        <div className="tokenContainer">
          <img src={tokenIcon} alt="Token Icon" className="tokenSign" />
          <p>
            {balance}
          </p>
          <div className="latestActionContainer">
            <img src={`${profit ? profitIcon : loseIcon}`} alt="Profit Icon" />
            <p className="number">{`${profit ? '+' : '-'} ${number}`}</p>
          </div>
        </div>
        <div className="bonus">
          <p>
            Bonuses
            <span
              className="tooltip"
              data-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iure atque quis autem ea pariatur consequatur, nemo commodi unde consequuntur possimus obcaecati numquam, inventore corporis? Architecto itaque ut deserunt cumque?"
            >
              &#128712;
            </span>
          </p>
          <div className="bonusInfo">
            <div className="scoreBar">
              <div
                className="bar dailyStreak tooltip"
                data-text={`Bonus by daily streak: ${dailyStreak}%`}
                style={{
                  width: `calc((100%)/3*(${dailyStreak}/${maxDailyStreak}))`,
                }}
              >
                <div className="info">
                  <img className="dailyStreak" src={litIcon} alt="Lit Icon" />
                  <p className="">{dailyStreak}</p>
                  <p className="">%</p>
                </div>
                <div className="expander"></div>
              </div>
              <div
                className="bar referral tooltip"
                data-text={`Bonus by referral: ${referral}%`}
                style={{width: `calc((100%)/3*(${referral}/${maxReferral}))`}}
              >
                <div className="info">
                  <img src={referralIcon} alt="Referral Icon" />
                  <p>{referral}</p>
                  <p className="percentage">%</p>
                </div>
                <div className="expander"></div>
              </div>
              <div
                className="bar finishedTask tooltip"
                data-text={`Bonus by survey: ${surveys}%`}
                style={{
                  width: `calc((100%)/3*(${surveys}/${maxSurveys}))`,
                }}
              >
                <div className="info">
                  <img src={surveyIcon} alt="Survey Icon" />
                  <p>{surveys}</p>
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
