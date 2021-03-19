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
  const [visibilityState, setVisibilityState] = useState(1);

  // const handleElementsVisibility = () => {};
  const handleScrollIndicator = (element, case) => {
  };

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
    </div>
  );
}
export default LandingPageNew;
