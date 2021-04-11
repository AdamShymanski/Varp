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
    margin-top: 40px;

    img {
      width: 2em;
      margin-right: 10px;
    }
  }
  .tokenContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    p {
      font-size: 2em;
    }
  }
  .lastActionContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-left: 20px;
      margin-right: 2px;
      width: 1em;
    }
    p {
      font-size: 1em;
    }
  }
  .expandContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px 0 30px;
    img {
      margin-left: 8px;
      width: 1em;
    }
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
}

export const Top = (props: Props) => {
  const {
    name = "Adam Szymanski",
    balance = 451,
    profit = true,
    number = 51,
    ...rest
  } = props;

  return (
    <main css={style}>
      <article className="name">
        <p>{name}</p>
      </article>
      <article className="bank">
        <p>Balance</p>
        <div className="tokenContainer">
          <img src={tokenIcon} alt="Token Icon" className="tokenSign" />
          <p>{balance}</p>
          <div className="lastActionContainer">
            <img src={`${profit ? profitIcon : loseIcon}`} alt="Profit Icon" />
            <p className="number">{`${profit ? "+" : "-"} ${number}`}</p>
          </div>
        </div>
        <div className="expandContainer">
          <p>View all information</p>
          <img src={expandIcon} alt="Exapand Icon" />
        </div>
      </article>
    </main>
  );
};
