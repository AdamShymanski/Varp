import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './../sass/SettingsPage-style.scss';

import Account from './SettingsPageElements/Account';
import Referrals from './SettingsPageElements/Referrals';
import Payout from './SettingsPageElements/Payout';

import {Button} from '@varp/ui';

import {useAuth} from '../contexts/AuthContext';

import PayoutIcon from './../resources/icons/payout.svg';
import ReferralIcon from './../resources/icons/referral-white.svg';
import AccountIcon from './../resources/icons/account.svg';

function SettingsPage() {
  const history = useHistory();
  const {currentUser} = useAuth();

  const [elementState, setElement] = useState<number>(0);
  const pushToMain = () => history.push('/');

  const selectElement = (element: number) => {
    setElement(element);
  };

  return (
    <main className="flexRow">
      <aside className="sideDrawer flexColumn">
        <div className="top flexColumn">
          <p className="poppinsFont">
            {currentUser ? currentUser.displayName : ''}
          </p>
        </div>
        <ul className="">
          <li
            onClick={() => {
              selectElement(0);
            }}
            className={`flexColumn ${elementState === 0 ? 'selected' : ''}`}
          >
            <button className="flexRow">
              <p>Account</p>
              <img src={AccountIcon} className="accountIcon" />
            </button>
          </li>
          <li
            onClick={() => {
              selectElement(1);
            }}
            className={`flexColumn ${elementState === 1 ? 'selected' : ''}`}
          >
            <button className="flexRow">
              <p>Referrals</p>
              <img src={ReferralIcon} className="referralsIcon" />
            </button>
          </li>
          <li
            onClick={() => {
              selectElement(2);
            }}
            className={`flexColumn ${elementState === 2 ? 'selected' : ''}`}
          >
            <button className="flexRow">
              <p>Payout</p>
              <img src={PayoutIcon} className="payoutIcon" />
            </button>
          </li>
        </ul>
        <div className={'buttonWrapper'}>
          <Button variant="disabled" action={pushToMain}>
            Go Back
          </Button>
        </div>
      </aside>
      <article className="subPageContainer">
        <Account elementState={elementState} />
        <Referrals elementState={elementState} />
        <Payout elementState={elementState} />
      </article>
    </main>
  );
}

export default SettingsPage;
