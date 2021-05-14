import React, {useEffect} from 'react';
import './../sass/ContactPage-style.scss';

import {useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

import logo from './../resources/icons/logo.png';

export default function SignInPage() {
  const history = useHistory();
  const {currentUser, loading} = useAuth();

  useEffect(() => {
    currentUser !== null && history.push('/');
  });

  return currentUser == null && loading == false ? (
    <div className="contactWrapper flexColumn">
      <div className="logoWrapper">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => {
            history.push('/home');
          }}
        />
      </div>
      <p className="robotoFont">Collaboration: collaboration@varp.io</p>
      <p className="robotoFont">Support: support@varp.io</p>
    </div>
  ) : (
    <div></div>
  );
}
