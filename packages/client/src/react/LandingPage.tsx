import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import './../sass/LandingPage-style.scss';

import {Button} from '@varp/ui';

//resources
import logo from './../resources/icons/logo.png';
import hamburger from './../resources/icons/hamburger-menu.svg';

//elements
import FirstElement from './elements/FirstElement';
import SecondElement from './elements/SecondElement';
import ThirdElement from './elements/ThirdElement';

function LandingPage() {
  const history = useHistory();

  const pushToRegister = () => history.push('/register');
  const pushToSignIn = () => history.push('/sign-in');

  const [visibilityState, setVisibilityState] = useState(1);

  const buttonVisibilityHandler = (hideNumber: number) => {
    if (hideNumber === visibilityState) {
      return false;
    }
    return true;
  };

  const [hamburgerState, setHamburger] = useState(false);

  return (
    <div className={`wrapper ${hamburgerState && "fullscreen"}`}>
      <div className="wrapper--navbar flexRow">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => {
            history.push('/home');
          }}
        />
        <ul className="flexRow">
          <div
            className={`default-menu flexRow ${
              hamburgerState && 'expand-menu'
            }`}
          >
            <li className="poppinsFont">For Developers</li>
            <li className="poppinsFont">Contact</li>
            <li className="poppinsFont" onClick={pushToRegister}>Register</li>
            <li className="poppinsFont" onClick={pushToSignIn}>Sign In</li>
          </div>
          <div className="hamburgerMenu">
            <img
              src={hamburger}
              alt="Hamburger Menu"
              onClick={() => setHamburger(!hamburgerState)}
            />
          </div>
          <li className="poppinsFont " onClick={pushToRegister}>
            <Button variant="primary" size="medium" children="Register" />
          </li>
          <li className="poppinsFont ">
            <p>or</p>
          </li>
          <li className="poppinsFont " onClick={pushToSignIn}>
            <Button variant="primary" size="medium" children="Sign In" />
          </li>
        </ul>
        <article
          className={`sideDrawer ${hamburgerState ? 'invisible' : ''}`}
        ></article>
      </div>
      <div className="wrapper--main flexColumn">
        <FirstElement />
        <SecondElement />
        <ThirdElement />
        {/* <div className="scrollIndicator flexColumn">
          <div className="dotWrapper flexRow">
            <div className={'flexColumn dot '}>
              <img
                src={checkMark}
                className={`checkMark ${checkMarkHandler(1)}`}
              />
            </div>
            <p className="poppinsFont">What is Varp?</p>
          </div>
          <div className="dotWrapper flexRow">
            <div className={'flexColumn dot '}>
              <img
                src={checkMark}
                className={`checkMark ${checkMarkHandler(2)}`}
              />
            </div>
            <p className="poppinsFont">How It Works?</p>
          </div>
          <div className="dotWrapper flexRow">
            <div className={'flexColumn dot '}>
              <img
                src={checkMark}
                className={`checkMark ${checkMarkHandler(3)}`}
              />
            </div>
            <p className="poppinsFont">How You Can Help?</p>
          </div>
        </div> */}
        {/* <div className="elementsWrapper flexColumn">
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
        </div> */}
      </div>
      {/* <div className="navigationButtons ">
        <div className={'gbbWrapper'}>
          <Button
            size="medium"
            variant="primary"
            children="Go Back"
            visibility={buttonVisibilityHandler(1)}
            onClick={() =>
              setVisibilityState((visibilityState) => visibilityState - 1)
            }
          />
        </div>
        <div className={'nbWrapper'}>
          <Button
            size="medium"
            children="Next"
            variant="primary"
            visibility={buttonVisibilityHandler(3)}
            onClick={() =>
              setVisibilityState((visibilityState) => visibilityState + 1)
            }
          />
        </div>
      </div> */}
    </div>
  );
}
export default LandingPage;
