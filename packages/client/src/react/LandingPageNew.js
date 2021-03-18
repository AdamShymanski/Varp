import { useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";

import "./../sass/LandingPageNew-style.scss";

//resources
import logo from "./../resources/icons/logo.svg";

//elements
import FirstElement from "./elements/FirstElement";
import SecondElement from "./elements/SecondElement";
import ThirdElement from "./elements/ThirdElement";

function LandingPageNew() {
  const [visibilityState, setVisibilityState] = useState(2);

  const handleElementsVisibility = () => {};
  return (
    <div className='wrapper'>
      <div className='navbar flexRow'>
        <img src={logo} alt='Logo' className='logo' />
        <ul className='flexRow'>
          <li className='poppinsFont'>Home</li>
          <li className='poppinsFont'>For Developers</li>
          <li className='poppinsFont'>Contact</li>
          <li className='poppinsFont suButton'>Sign Up</li>
        </ul>
      </div>
      <div className='scrollIndicator flexColumn'>
        <div className='dot' />
        <div className='line' />
        <div className='dot' />
        <div className='line' />
        <div className='dot' />
        <div className='line' />
        <div className='dot' />
      </div>
      <FirstElement
        visibility={() => {
          if (visibilityState == 1) return true;
          else return false;
        }}
      />
      <SecondElement
        visibility={() => {
          if (visibilityState == 2) return true;
          else return false;
        }}
      />
      <ThirdElement
        visibility={() => {
          if (visibilityState == 3) return true;
          else return false;
        }}
      />

      {/* <main>
        <article>
          <div className='title poppinsFont flexRow'>
            <div className='accentLine' />
            <p>What Pyramid is?</p>
          </div>
          <div className='body poppinsFont'>
            <p>
              It's a platform where users can compete against each other for a pot of money in mini-games like Galaga,
              Pac Man, Snake and other simple arcade games. To join the game, each player must complete several tasks
              that do not take more than 10 minutes. Tasks are, for example, visiting the sponsor's website, leaving him
              your email address, sharing your opinion about his product or filling out a short questionnaire. For
              completing tasks, the user receives tokens that can later be exchanged for participation in the game. The
              number of tokens needed to join the game is different each time and depends on the size of the money pool
              that can be won.
            </p>
          </div>
        </article>
        <article>
          <div className='title poppinsFont flexRow'>
            <div className='accentLine' />
            <p>What Pyramid've already achieved?</p>
          </div>
          <div className='body poppinsFont'>
            <p>
              Pyramid is very new. We started about 3 months ago. You can see our latest developments below. We are very
              proud of them and want to share them with you, but that's not the only goal. They also show how many fim
              and people trust us and how engaged community we create. You can join it today!
            </p>
          </div>
          <div className='bottom flexRow'>
            <div className='card flexColumn'>
              <AccountBoxIcon className={classes.accountIcon} />
              <p className='number poppinsFont'>2,000+</p>
              <p className='description poppinsFont'>Users who have already signed up</p>
            </div>
            <div className='card flexColumn'>
              <BusinessIcon className={classes.accountIcon} />
              <p className='number poppinsFont'>21</p>
              <p className='description poppinsFont'>Trusted cooperating companies</p>
            </div>
            <div className='card flexColumn'>
              <AlarmIcon className={classes.accountIcon} />
              <p className='number poppinsFont'>3123 H</p>
              <p className='description poppinsFont'>Hours spent on Pyramid by our users</p>
            </div>
          </div>
        </article>
      </main> */}
    </div>
  );
}
export default LandingPageNew;
