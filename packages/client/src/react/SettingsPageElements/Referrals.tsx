import React, {useState} from 'react';
import '../../sass/SettingsPageElements/Referrals-style.scss';
import copyIcon from '../../resources/icons/copy-referral-code.svg';
import dailyStreakIcon from '../../resources/icons/daily-streak.svg';
import referralIcon from '../../resources/icons/referral-green.svg';

import {MessageBox} from '@varp/ui';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {useAuth} from '../../contexts/AuthContext';

function Referrals(params) {
  const {userData} = useAuth();

  const [message, setMessage] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  const messageBoxProps = {
    toggle: toggle,
    message: message,
    setToggle: setToggle,
  };

  const setMessageBox = (msg: string) => {
    setMessage(msg);
    setToggle(true);
  };

  return (
    <>
      <main
        className={`referralWrapper  ${
          params.elementState === 1 ? 'show' : 'hide'
        }`}
      >
        <div className="container">
          <div className="referralCode">
            <h2>Your referral code</h2>
            <div>
              <p className="code">{userData.referralCode}</p>
              <span className="divider" />
              <CopyToClipboard text={userData.referralCode}>
                <img
                  src={copyIcon}
                  alt="copyIcon"
                  onClick={() => {
                    setMessageBox('Referral code copied to clipboard');
                  }}
                />
              </CopyToClipboard>
            </div>
          </div>
          <div className="bonuses">
            <h2>Bonuses</h2>
            <div className="card">
              <h3 className="title">
                Daily Streak:{' '}
                <span>
                  <img src={dailyStreakIcon} alt="daily streak icon" />{' '}
                  {userData.dailyStreak}%
                </span>{' '}
              </h3>
              <p className="body">
                We reward our users for daily activeness. You only need to
                complete one task every 24 hours. With each day of your
                activeness you will gain 2% bonus.
              </p>

              <footer className="footer">
                <p>
                  You have been active for{' '}
                  <span className="highlight">{userData.dailyStreak} days</span>{' '}
                  in a row.
                </p>
              </footer>
            </div>
            <div className="card">
              <h3 className="title">
                Referral Program:{' '}
                <span>
                  <img src={referralIcon} alt="referral icon" />{' '}
                  {userData.referralProgram}%
                </span>
              </h3>
              <p className="body">
                Share your referral code with your friends. If someone signs up
                or uses your code, they will earn 120 tokens to get started and
                you will receive a 4% bonus per account.
              </p>

              <footer className="footer">
                <p>
                  Your code has already been used{' '}
                  <span className="highlight">
                    {userData.referralProgram} times
                  </span>
                  .
                </p>
              </footer>
            </div>
          </div>
        </div>
      </main>
      <MessageBox {...messageBoxProps} />
    </>
  );
}

export default Referrals;
