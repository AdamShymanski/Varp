import React from 'react';
import {css} from '@emotion/react';

import playIcon from './play.svg';
import logOutIcon from './log_out.svg';
import settingsIcon from './settings.svg';
import copyReferralCodeIcon from './copy_referral_code.svg';

import {useHistory} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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

  .card {
    padding: 20px 15px;
    background: #1b1b1b;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 6px;
    img {
      width: 30px;
    }
  }

  font-family: 'Poppins', sans-serif;
  background: #121212;
  color: #f4f4f4;
`;

export interface Props {
  /**
   * User's referral code
   */
  referralCode: string;
  auth: any;
}

export const Bottom: React.FC<Props> = (props) => {
  const {referralCode = '9590-1431 4-1344', auth, ...rest} = props;
  const history = useHistory();

  return (
    <main css={style}>
      <div className="card">
        <img src={settingsIcon} onClick={() => {}} />
        <img
          src={logOutIcon}
          onClick={() => {
            auth.signOut();
            history.push('/home');
          }}
        />
        <CopyToClipboard text={referralCode}>
          <img
            src={copyReferralCodeIcon}
            // onClick={() =>
            //   `Crete functions which copy referral code to client's clipboard`
            // }
          />
        </CopyToClipboard>

        <img
          src={playIcon}
          onClick={() => `Crete functions which shows game page`}
        />
      </div>
    </main>
  );
};
