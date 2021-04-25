import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import './../sass/LandingPage-style.scss';

import {Button} from '@varp/ui';

//resources
import logo from './../resources/icons/logo.png';
import checkMark from './../resources/icons/check-mark.svg';

//icons
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

//elements
import FirstElement from './elements/FirstElement';
import SecondElement from './elements/SecondElement';
import ThirdElement from './elements/ThirdElement';

const useStyles = makeStyles({
  arrowF: {
    position: 'absolute',
    right: '0.6vw',
    fontSize: '1.38em',
    fontStyle: '700',
  },
  arrowGb: {
    position: 'absolute',
    left: '0.6vw',
    fontSize: '1.38em',
    fontStyle: '700',
  },
});

function LandingPage() {
  // useEffect(() => {
  //   const createAccount = firebase.functions().httpsCallable("createAccount");

  //   createAccount("coo").then(result => {
  //     console.log(result.data);
  //   });
  // }, []);

  const classes = useStyles();
  const history = useHistory();

  const pushToRegister = () => history.push('/register');
  const pushToSignIn = () => history.push('/sign-in');

  const [visibilityState, setVisibilityState] = useState(1);

  const checkMarkHandler = (number: Number) => {
    if (number === 2) {
      if (visibilityState === 2) {
        return 'visible';
      }
      if (visibilityState === 3) {
        return 'visible';
      }
      return 'invisible';
    }
    if (number === 3) {
      if (visibilityState !== 3) return 'invisible';
    }
  };

  const buttonVisibilityHandler = (hideNumber: number) => {
    if (hideNumber === visibilityState) {
      return false;
    }
    return true;
  };

  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="wrapper">
      <div className="wrapper--navbar flexRow">
        <img src={logo} alt="Logo" className="wrapper--navbar--logo" />
        <ul className="flexRow">
          <div className={`default-menu flexRow ${hamburger && 'expand-menu'}`}>
            <li className="poppinsFont">Home</li>
            <li className="poppinsFont">For Developers</li>
            <li className="poppinsFont">Contact</li>
          </div>
          <div className="hamburger-menu">
            <MenuIcon onClick={() => setHamburger(!hamburger)} />
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
      </div>
      <div className="wrapper--main">
        <div className="scrollIndicator flexColumn">
          <div className="dotWrapper flexRow">
            {/* handleScrollIndicator("dot", 1) */}
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
        </div>
        <div className="wrapper--main--main-content">
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
        </div>
      </div>
      <div className="navigationButtons ">
        {/* <button
          className={`poppinsFont nBtn flexRow ${
            visibilityState === 3 ? "invisible" : ""
          }`}
          onClick={() =>
            setVisibilityState(visibilityState => visibilityState + 1)
          }
        >
          Next
          <ArrowForwardIosIcon className={classes.arrowF} />
        </button> */}
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
      </div>
    </div>
  );
}
export default LandingPage;
