import React, {useState, useEffect} from 'react';
import '../../sass/SettingsPageElements/Referrals-style.scss';
import copyIcon from '../../resources/icons/copy-referral-code.svg';
import surveyIcon from '../../resources/icons/survey.svg';
import dailyStreakIcon from '../../resources/icons/daily-streak.svg';
import referralIcon from '../../resources/icons/referral-green.svg';
import {Button} from '@varp/ui';

function Referrals(params) {
  return (
    <main
      className={`referralWrapper flexColumn ${
        params.elementState == 1 ? 'show' : 'hide'
      }`}
    >
      <div className="container">
        <div className="referralCode">
          <h2>Your referral code</h2>
          <div>
            <p className="code">nnyMJAv7L1XruxWVtwF5uSoPlPY2</p>
            <span className="divider" />
            <img src={copyIcon} alt="" />
          </div>
        </div>
        <div className="bonuses">
          <h2>Bonuses</h2>
          <div className="card">
            <h3 className="title">
              Daily Streak:{' '}
              <span>
                <img src={dailyStreakIcon} alt="daily streak icon" /> 8%
              </span>{' '}
            </h3>
            <p className="body">
              We reward our users for daily activeness. You only need to
              complete one task every 24 hours. With each day of your activeness
              you will gain 1% bonus.
            </p>

            <footer className="footer">
              <p>
                You have been active for{' '}
                <span className="highlight">8 days</span> in a row. Nice!
              </p>
            </footer>
          </div>
          <div className="card">
            <h3 className="title">
              Referral Program:{' '}
              <span>
                <img src={referralIcon} alt="referral icon" /> 8%
              </span>
            </h3>
            <p className="body">
              Share your referral code with your friends. If someone signs up or
              uses your code, they will earn 120 tokens to get started and you
              will receive a 2% bonus per account.
            </p>

            <footer className="footer">
              <p>
                Your code has already been used{' '}
                <span className="highlight">2 times</span>.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Referrals;
