import React, {ReactComponentElement, useState, useEffect} from 'react';
import './../sass/MainPage-style.scss';

import {SideDrawer, Card} from '@varp/ui';

import {useAuth} from '../contexts/AuthContext';
import {auth} from './../firebase';

// const cardsHandler = (object: {}) => {
//number of cards
//   const number = Object.keys(object);

//   return <Card {...props} />;
// };

function MainPage() {
  const {currentUser, fetchUserData} = useAuth();
  const [result, setResult] = useState<any>({balance: 0, name: ''});
  const [loading, setlLoading] = useState<boolean>(true);


  useEffect(() => {
    async function provideAsync() {
      const data = await fetchUserData(currentUser?.uid);
      setResult(data);
      setlLoading(false);
    }
    provideAsync();
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
        name: '',
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
        referralCode: result.data.referralCode,
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
        name: result.data.name,
        balance: result.data.balance,
        number: result.data.lastAction,
        profit: result.data.profit,
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
