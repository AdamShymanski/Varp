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
  const pushToContact = () => history.push('/contact');

  const [visibilityState, setVisibilityState] = useState(1);

  const buttonVisibilityHandler = (hideNumber: number) => {
    if (hideNumber === visibilityState) {
      return false;
    }
    return true;
  };

  const [hamburgerState, setHamburger] = useState(false);

  return (
    <div className={`wrapper ${hamburgerState && 'fullscreen'}`}>
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
            <li className="poppinsFont" onClick={pushToContact}>
              {' '}
              Contact
            </li>
            <li className="poppinsFont" onClick={pushToRegister}>
              Register
            </li>
            <li className="poppinsFont" onClick={pushToSignIn}>
              Sign In
            </li>
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
      </div>
      <footer className="flexColumn robotoFont">
        <p>© 2021 Varp.io</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
export default LandingPage;
