import React, {useState, useEffect} from 'react';
import './../sass/MainPage-style.scss';

import {SideDrawer} from '@varp/ui';
import LoadingPage from './LoadingPage';

import {useAuth} from '../contexts/AuthContext';
import {auth} from './../firebase';

import {writeStorage} from '@rehooks/local-storage';

function MainPage() {
  const {currentUser, userData, globalData, loading} = useAuth();

  writeStorage('path', '/');

  if (loading) {
    return <LoadingPage />;
  }

  const props = {
    header: {
      title: 'Card Title',
      thumbnail: 'https://placehold.co/65x65/orange/white',
    },
    details: {
      minutes: 15,
      type: 'Watching video ad',
      reward: 150,
    },
    description: {
      children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Nam repellendus similique ab, ad sint labore voluptatibus doloribus aliquam aperiam a, 
                accusamus dolorem odio quis quod id, cupiditate vero sapiente est.`,
    },
    actionBar: {
      status: 'Start',
    },
    bottom: {
      referralCode: userData?.referralCode,
      auth: auth,
    },
    gameCard: {
      title: 'Jackpot',
      time: globalData?.time,
      reward: globalData?.prize,
      players: globalData?.players,
      spectators: globalData?.spectators,
    },
    top: {
      name: currentUser?.displayName,
      balance: userData?.balance,
      number: userData?.lastAction,
      profit: userData?.profit,
      dailyStreak: userData?.dailyStreak,
      referral: userData?.referralProgram,
    },
  };

  return (
    <div className="mpWrapper poppinsFont">
      <SideDrawer {...props} />
      <div className="cardsContainer">
        <div className="mpInfo">We are starting soon...</div>
        {/* <Card {...props} /> */}
      </div>
    </div>
  );
}

export default MainPage;
