import React, {useState, useEffect} from 'react';
import './../sass/MainPage-style.scss';

import {SideDrawer, Card} from '@varp/ui';
import LoadingPage from './LoadingPage';

import {useAuth} from '../contexts/AuthContext';
import {auth} from './../firebase';

import {writeStorage} from '@rehooks/local-storage';

import grammarly from './../resources/illustrations/grammarly-logo.jpg';

function MainPage() {
  const {currentUser, userData, globalData, loading} = useAuth();

  writeStorage('path', '/');

  if (loading) {
    return <LoadingPage />;
  }

  const props = {
    header: {
      title: 'Grammarly',
      thumbnail: grammarly,
    },
    details: {
      minutes: 2,
      type: 'Sign Up',
      reward: 15,
    },
    description: {
      children: `Grammarly’s AI-powered applications help people communicate more effectively. Millions of users rely on Grammarly every day to make their messages, documents, and social media posts clear, mistake-free, and impactful. Grammarly’s sophisticated AI not only corrects your grammatical mistakes but also makes your writing more understandable and helps you make the right impression on the reader based on your audience and goals.`,
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
      name: userData?.name,
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
        <Card {...props} />
      </div>
    </div>
  );

  // return (
  //   <div className="mpWrapper poppinsFont">
  //     <SideDrawer {...props} />
  //     <div className="cardsContainer">
  //       <div className="mpInfo">We are starting soon...</div>
  //       <Card {...props} />
  //     </div>
  //   </div>
  // );
}

export default MainPage;
