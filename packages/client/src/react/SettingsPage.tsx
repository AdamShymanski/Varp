import React, {useState, useEffect} from 'react';

import './../sass/SettingsPage-style.scss';

import Account from './SettingsPageElements/Account';
import Referrals from './SettingsPageElements/Referrals';
import Payout from './SettingsPageElements/Payout';

import {Button} from '@varp/ui';

import {useAuth} from '../contexts/AuthContext';

function SettingsPage() {
  const {currentUser, fetchUserData} = useAuth();

  const [elementState, setElement] = useState<number>(0);

  const selectElement = (element: number) => {
    setElement(element);
    console.log(element);
  };

  console.log(currentUser);

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
            <button>Account</button>
          </li>
          <li
            onClick={() => {
              selectElement(1);
            }}
            className={`flexColumn ${elementState === 1 ? 'selected' : ''}`}
          >
            <button>Referrals</button>
          </li>
          <li
            onClick={() => {
              selectElement(2);
            }}
            className={`flexColumn ${elementState === 2 ? 'selected' : ''}`}
          >
            <button>Payout</button>
          </li>
        </ul>
        <div className={'buttonWrapper'}>
          <Button variant="disabled" />
        </div>
      </aside>
      <article>
        <Account elementState={elementState} />
        <Referrals elementState={elementState} />
        <Payout elementState={elementState} />
      </article>
    </main>
  );
}

export default SettingsPage;
