import { css } from "@emotion/react";
import React from "react";

import tokenIcon from "./token_icon_circle.svg";
import expandIcon from "./show_all_info_icon.svg";
import loseIcon from "./lose_icon.svg";
import profitIcon from "./profit_icon.svg";

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  max-width: 500px;
  font-family: "Poppins", sans-serif;
  background: #121212;
  color: #f4f4f4;
  
  
  .name {
    width: 20vw;
    background: #1b1b1b;
    padding: 15px 20px;
    margin-top: 20px;
    
    border-radius: 8px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bank {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 28px;
    font-weight: 900;
    .title {
      font-size: 3em;
    }
    img {
      width: 2em;
      margin-right: 10px;
    }
    .tokenContainer {
      line-height: 0.7em;
      margin: 20px 0px 40px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500;
      
      p {
        font-size: 3em;
      }
      .number {
        font-size: 1em;
      }
    }
    .lastActionContainer {
      align-self: flex-end;
      display: flex;
      flex-direction: row;
      img {
        margin-left: 20px;
        margin-right: 2px;
        width: 1em;
      }
      p {
        font-size: 1em;
      }
    }

    .bonus {
      font-size: 1.5em;
      > p {
        margin-bottom: 12px;
      }
      .scoreBar {
        width: 80%;
        height: 40px;
        display: flex;
        flex-direction: row;
        box-shadow: 0 0 0 2px #5c5c5c inset;
        border-radius: 6px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }
      .dailyStreak {
        display: flex;
        align-items: center;
        background-color: #2cb200;
        border-radius: 6px 0 0 6px;
        z-index: 3;
        position: relative;
        > p {
          margin-left: 20px;
        }
        &::after {
          background-color: inherit;
          display: inline-block;
          border-radius: 12px;
          width: 12px;
          height: 100%;
          left: calc(100% - 6px);
          top: 0%;
          position: absolute;
          content: "";
        }
      }
      .referral {
        display: flex;
        align-items: center;
        background-color: #33cc01;
        z-index: 2;
        position: relative;

        > p {
          margin-left: 20px;
        }

        &::after {
          background-color: inherit;
          display: inline-block;
          border-radius: 12px;
          width: 12px;
          height: 100%;
          left: calc(100% - 6px);
          top: 0%;
          position: absolute;
          content: "";
        }
      }
      .finishedTask {
        display: flex;
        align-items: center;
        position: relative;
        background-color: #3be601;
        z-index: 1;

        > p {
          margin-left: 20px;
        }
        
        &::after {
          background-color: inherit;
          display: inline-block;
          border-radius: 12px;
          width: 12px;
          height: 100%;
          left: calc(100% - 6px);
          top: 0%;
          position: absolute;
          content: "";
        }
      }
    }
  }
  .bonusInfo {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    > p {
      margin-left: 4px;
      font-size: 0.5em;
    }
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
  name: string;
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
  finishedTask: number;
}

export const Top = (props: Props) => {
  const {
    name = "Adam Szymanski",
    balance = 451,
    profit = true,
    number = 51,
    dailyStreak = 5,
    referral = 5,
    finishedTask = 5,
    ...rest
  } = props;
  const maxDailyStreak = 10;
  const maxReferral = 10;
  const maxFinishedTask = 10;

  return (
    <main css={style}>
      <article className="bank">
        <div  className="title">
          <p>Bank</p>
        </div>
        <div className="tokenContainer">
          <img src={tokenIcon} alt="Token Icon" className="tokenSign" />
          <p>
            {balance}
          </p>
          <div className="lastActionContainer">
            <img src={`${profit ? profitIcon : loseIcon}`} alt="Profit Icon" />
            <p className={"number " + (profit ? "green" : "red")}>{number}</p>
          </div>
        </div>
        <div className="bonus">
          <p>Bonuses</p>
          <div className="bonusInfo">
            <div className="scoreBar">
              <div className="dailyStreak" style={{width: `calc((100%)/3*(${dailyStreak}/${maxDailyStreak}))`}}><p>+ {dailyStreak}%</p></div>
              <div className="referral" style={{width: `calc((100%)/3*(${referral}/${maxReferral}))`}}><p>+ {referral}%</p></div>
              <div className="finishedTask" style={{width: `calc((100%)/3*(${finishedTask}/${maxFinishedTask}))`}}><p>+ {finishedTask}%</p></div>
            </div>
            <p>max. 30%</p>
          </div>
        </div>
      </article>
    </main>
  );
};
