import React, {useState, useEffect} from 'react';

import './../sass/LoadingPage-style.scss';
import logo from './../resources/icons/logo.png';
import BarLoader from 'react-spinners/BarLoader';

import {Redirect} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import {writeStorage} from '@rehooks/local-storage';
import {useLocalStorage} from '@rehooks/local-storage';

export default function LoadingPage() {
  const {currentUser, loading} = useAuth();
  let [path] = useLocalStorage<string>('path');

  if (!loading) {
    console.log('redirect');

    if (currentUser) {
      console.log('redirect x');
      if (!path) writeStorage('path', '/');
      return <Redirect to={path || '/'} />;
    } else {
      console.log('redirect z');
      if (!path) {
        writeStorage('path', '/home');
        path = '/home';
      }
      return <Redirect to={path} />;
    }
  }

  if (loading) {
    console.log('loading page dispaly');
    return (
      <div className="loWrapper flexColumn">
        <img src={logo} alt="Image" />
        <BarLoader loading={true} height={10} width={340} color={'#0082ff'} />
      </div>
    );
  }

  return <div />;
}
