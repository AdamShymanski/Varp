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
import {ReactNode} from 'react';

import {writeStorage} from '@rehooks/local-storage';
import just_logo from '../resources/icons/just-logo.png';

function SettingsPage() {
  const history = useHistory();
  const {userData} = useAuth();
  const [elementState, setElement] = useState<number>(0);
  const [subpage, setSubpage] = useState<ReactNode>(
    <Account elementState={0} />,
  );

  const pushToMain = () => history.push('/');

  writeStorage('path', '/settings');
  const BackButton = () => (
    <div className={'buttonWrapper'}>
      <Button variant="disabled" action={pushToMain}>
        Go Back
      </Button>
    </div>
  );
  return (
    <div>
      <div className={'headerWrapper'}>
        <img src={just_logo} className={'justLogo'} />
        <BackButton />
      </div>
      <main className="m-centered flexRow ">
        <aside className="sideDrawer flexColumn">
          <div className="top flexColumn">
            <p className="poppinsFont">{userData?.name}</p>
          </div>
          <ul>
            <li
              onClick={() => {
                setSubpage(<Account elementState={0} />);
                setElement(0);
              }}
              className={`flexColumn ${elementState == 0 ? 'selected' : ''}`}
            >
              <button className="flexRow">
                <img src={AccountIcon} className="accountIcon" />
                <p>Account</p>
              </button>
            </li>
            <li
              onClick={() => {
                setSubpage(<Referrals elementState={1} />);
                setElement(1);
              }}
              className={`flexColumn ${elementState == 1 ? 'selected' : ''}`}
            >
              <button className="flexRow">
                <img src={ReferralIcon} className="referralsIcon" />
                <p>Referrals</p>
              </button>
            </li>
            <li
              onClick={() => {
                setSubpage(<Payout elementState={2} />);
                setElement(2);
              }}
              className={`flexColumn ${elementState === 2 ? 'selected' : ''}`}
            >
              <button className="flexRow">
                <img src={PayoutIcon} className="payoutIcon" />
                <p>Payout</p>
              </button>
            </li>
          </ul>
          <BackButton />
        </aside>
        <article className="subPageContainer">{subpage}</article>
        <article className="subPageContainer flexColumn mobile">
          <Account elementState={0} />
          <Referrals elementState={1} />
          <Payout elementState={2} />
        </article>
      </main>
    </div>
  );
}

export default SettingsPage;
