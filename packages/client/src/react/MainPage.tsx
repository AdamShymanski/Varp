import React, {ReactComponentElement, useState, useEffect} from 'react';
import './../sass/MainPage-style.scss';

import {SideDrawer, Card} from '@varp/ui';

import {useAuth} from '../contexts/AuthContext';
import {auth} from './../firebase';

import {writeStorage} from '@rehooks/local-storage';

// const cardsHandler = (object: {}) => {
//number of cards
//   const number = Object.keys(object);

//   return <Card {...props} />;
// };

function MainPage() {
  const {currentUser, userData, loading} = useAuth();
  const [result, setResult] = useState<any>({balance: 0, name: ''});

  useEffect(() => {
    setResult(userData);
    writeStorage('path', '/');
  }, []);

  // const crcCooldown = false;

  // const props = {
  //   header: {
  //     title: 'Card Title',
  //     thumbnail: 'https://placehold.co/65x65/orange/white',
  //   },
  //   details: {
  //     minutes: 15,
  //     type: 'Watching video ad',
  //     reward: 150,
  //   },
  //   description: {
  //     children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //               Nam repellendus similique ab, ad sint labore voluptatibus doloribus aliquam aperiam a,
  //               accusamus dolorem odio quis quod id, cupiditate vero sapiente est.`,
  //   },
  //   actionBar: {
  //     status: 'Start',
  //   },
  //   bottom: {
  //     referralCode: '0',
  //     auth: auth,
  //     cooldown: boxState,
  //   },
  //   gameCard: {
  //     title: 'End It Fast',
  //     date: 'April 2nd',
  //     time: '2:30pm',
  //     price: 500,
  //     reward: 214,
  //   },
  //   top: {
  //     name: '',
  //     balance: 0,
  //     number: 0,
  //     profit: false,
  //     referral: 0,
  //     dailyStreak: 0,
  //     surveysFinished: 0,
  //   },
  // };
  // return (
  //   <div className="mpWrapper poppinsFont">
  //     <SideDrawer {...props} />
  //     <div className="cardsContainer">
  //       <div className="mpInfo">We are starting soon...</div>
  //       {/* <Card {...props} /> */}
  //     </div>
  //     <aside className={`msgBox flexRow ${boxState ? 'show' : 'hide'}`}>
  //       <div className="iconWrapper flexRow">
  //         <img src={exclamationMark} alt="Exclamation Mark" />
  //       </div>
  //       <div className="textWrapper">Referral Code copied to Clipboard</div>
  //     </aside>
  //   </div>
  // );

  if (loading) {
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
        referralCode: '0',
        auth: auth,
      },
      gameCard: {
        title: 'End It Fast',
        date: 'April 2nd',
        time: '2:30pm',
        price: 500,
        reward: 214,
      },
      top: {
        name: currentUser ? currentUser.displayName : '',
        balance: 0,
        number: 0,
        profit: false,
        referral: 0,
        dailyStreak: 0,
        surveysFinished: 0,
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
  } else {
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
        referralCode: result?.referralCode,
        auth: auth,
      },
      gameCard: {
        title: 'We are starting soon',
        date: '	June 15th',
        time: '2:30pm',
        price: 500,
        reward: 438,
      },
      top: {
        name: currentUser?.displayName,
        balance: result?.balance,
        number: result?.lastAction,
        profit: result?.profit,
        dailyStreak: result?.dailyStreak,
        referral: result?.referralProgram,
        surveysFinished: result?.surveyProgram,
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
}

export default MainPage;
