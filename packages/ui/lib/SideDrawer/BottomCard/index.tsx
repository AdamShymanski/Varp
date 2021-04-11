import { css } from "@emotion/react";
import React from "react";

import logOutIcon from "./log_out.svg";
import settingsIcon from "./settings.svg";
import playIcon from "./play.svg";
import copyReferralCodeIcon from "./copy_referral_code.svg";

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  max-width: 500px;

  .card {
    width: 20vw;
    padding: 20px 15px;
    background: #1b1b1b;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    position: relative;
    bottom: -20px;
    border-radius: 8px;
    img {
      width: 30px;
    }
  }

  font-family: "Poppins", sans-serif;
  background: #121212;
  color: #f4f4f4;
`;

export interface Props {
  /**
   * User's referral code
   */
  referralCode: string;
}

export const Bottom = (props: Props) => {
  const { referralCode = "9590-1431 4-1344", ...rest } = props;

  return (
    <main css={style}>
      <div className="card">
        <img
          src={settingsIcon}
          onClick={() => `Crete functions which shows settings page`}
        />
        <img
          src={logOutIcon}
          onClick={() => `Crete functions which log out user`}
        />
        <img
          src={copyReferralCodeIcon}
          onClick={() =>
            `Crete functions which copy referral code to client's clipboard`
          }
        />
        <img
          src={playIcon}
          onClick={() => `Crete functions which shows game page`}
        />
      </div>
    </main>
  );
};
