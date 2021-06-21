import React, {useState, useEffect} from 'react';

import logo from './../resources/icons/logo.png';
import BarLoader from 'react-spinners/BarLoader';

import {writeStorage} from '@rehooks/local-storage';

import './../sass/LoadingPage-style.scss';

export default function LoadingPage() {
  useEffect(() => {
    writeStorage('path', '/loading');
    setTimeout(() => {
      writeStorage('path', '/home');
      
    }, 8000);
  }, []);

  return (
    <div className="loWrapper flexColumn">
      <img src={logo} alt="Image" />
      <BarLoader loading={true} height={10} width={340} color={'#0082ff'} />
    </div>
  );
}
