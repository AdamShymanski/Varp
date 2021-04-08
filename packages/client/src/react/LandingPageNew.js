import { useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";

import "./../sass/LandingPageNew-style.scss";

//resources
import logo from "./../resources/icons/logo.svg";

//icons
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MenuIcon from '@material-ui/icons/Menu';
//elements
import FirstElement from "./elements/FirstElement";
import SecondElement from "./elements/SecondElement";
import ThirdElement from "./elements/ThirdElement";

const useStyles = makeStyles({
  arrowF: {
    position: "absolute",
    right: "0.6vw",
    fontSize: "1.38em",
    fontWeight: "700",
  },
  arrowGb: {
    position: "absolute",
    left: "0.6vw",
    fontSize: "1.38em",
    fontWeight: "700",
  },
});

function LandingPageNew() {
  const classes = useStyles();
  const history = useHistory();

  const pushToSignUp = () => history.push("/sign-up");

  const [visibilityState, setVisibilityState] = useState(2);

  const handleScrollIndicator = (element, index) => {
    switch (visibilityState) {
      case 1: {
        if (element === "dot") {
          if (index === 1) return "dot accent";
          return "dot";
        }
        return "line";
      }
      case 2: {
        if (element === "dot") {
          switch (index) {
            case 1:
              return "dot accent";
            case 2:
              return "dot accent";
          }
          return "dot";
        }
        if (element === "line") {
          if (index === 1) return "line accent";
          return "line";
        }
      }
      case 3: {
        if (element === "dot") {
          return "dot accent";
        }
        return "line accent";
      }
    }
  };

  const [hamburger, setHamburger] = useState(false);
  const [menuTitle, setMenuTitle] = useState("");
  const getSiblings = function (e) {
    let siblings = [],
      sibling = e.parentNode.firstChild;;
    if (!e.parentNode) return siblings;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };

  const handleMenu = (e) => {
    e.target.classList.add('active')
    window.innerWidth <= 500 && setMenuTitle(e.target.firstChild.innerHTML) 
    getSiblings(e.target).map(item => item.classList.remove('active'))
  }

  return (
    <div className='wrapper'>
      <div className='wrapper--navbar flexRow'>
        <img src={logo} alt='Logo' className='wrapper--navbar--logo' />
        <ul className='flexRow'>
          <div class={`default-menu flexRow ${hamburger && "expand-menu"}`}>
            <li className='poppinsFont'>Home</li>
            <li className='poppinsFont'>For Developers</li>
            <li className='poppinsFont'>Contact</li>
          </div>
          <div class="hamburger-menu">
            <MenuIcon onClick={() => setHamburger(!hamburger)} />
          </div>
          <li className='poppinsFont suButton' onClick={pushToSignUp}>
            Sign Up
          </li>
        </ul>
      </div>
      <div className="wrapper--main">
        <div className='wrapper--main--scrollIndicator flexColumn'>
          <div>{menuTitle || " "}</div>
          <ul onClick={(e) => handleMenu(e)}>
            <li><a>What is Pyramid?</a></li>
            <li><a>How It Works?</a></li>
            <li><a>How You Can Help?</a></li>
          </ul>
          {/* <div className='dotWrapper flexRow'>
              <div className={handleScrollIndicator("dot", 1)} />
              <p className='poppinsFont'>What is Pyramid?</p>
            </div>

            <div className={handleScrollIndicator("line", 1)} />
            <div className='dotWrapper flexRow'>
              <div className={handleScrollIndicator("dot", 2)} />
              <p className='poppinsFont'>How It Works?</p>
            </div>
            <div className={handleScrollIndicator("line", 2)} />
            <div className='dotWrapper flexRow'>
              <div className={handleScrollIndicator("dot", 3)} />
              <p className='poppinsFont'>How You Can Help?</p>
            </div> */}
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
      <div className='navigationButtons '>
        <button
          className={`poppinsFont gbBtn flexRow ${visibilityState === 1 ? "invisible" : ""}`}
          onClick={() => setVisibilityState((visibilityState) => visibilityState - 1)}>
          <ArrowBackIosIcon className={classes.arrowGb} />
          Go Back
        </button>
        <button
          className={`poppinsFont nBtn flexRow ${visibilityState === 3 ? "invisible" : ""}`}
          onClick={() => setVisibilityState((visibilityState) => visibilityState + 1)}>
          Next
          <ArrowForwardIosIcon className={classes.arrowF} />
        </button>
      </div>
    </div>
  );
}
export default LandingPageNew;
