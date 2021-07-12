import React, {useState, useEffect} from 'react';

import './../sass/LoadingPage-style.scss';
import logo from './../resources/icons/logo.png';
import BarLoader from 'react-spinners/BarLoader';

import {Redirect} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import {writeStorage} from '@rehooks/local-storage';
import {useLocalStorage} from '@rehooks/local-storage';

export interface Props {
  loadingState?: boolean;
}

const LoadingPage: React.FC<Props> = (props) => {
  const {currentUser, loading} = useAuth();
  let [path] = useLocalStorage<string>('path');

  let {loadingState} = props;

  // const [innerLoading, setInnerLoading] = useState<boolean>(true);

  if (!loading) {
    if (currentUser) {
      if (!path) writeStorage('path', '/');
      return <Redirect to={path || '/'} />;
    } else {
      if (!path) {
        writeStorage('path', '/home');
        path = '/home';
      }
      return <Redirect to={path} />;
    }
  }

  if (loading) {
    return (
      <div className="loWrapper flexColumn">
        <img src={logo} alt="Image" />
        <BarLoader loading={true} height={10} width={340} color={'#0082ff'} />
      </div>
    );
  }

  return <div />;
};

export default LoadingPage;
