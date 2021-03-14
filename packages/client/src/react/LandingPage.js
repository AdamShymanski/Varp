import { useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";

import "./../sass/LandingPage-style.scss";
//resources
import logo from "./../resources/icons/logo.svg";

//elements
import FirstElement from "./elements/FirstElement.js";
import SecondElement from "./elements/SecondElement.js";
import ThirdElement from "./elements/ThirdElement.js";
import FourthElement from "./elements/FourthElement";

function LandingPage() {
  const history = useHistory();

  const [cardSelected0, setCardSelected0] = useState(true);
  const [cardSelected1, setCardSelected1] = useState(false);
  const [cardSelected2, setCardSelected2] = useState(false);
  const [cardSelected3, setCardSelected3] = useState(false);

  const [firstElementState, setFirstElementState] = useState(true);
  const [secondElementState, setSecondElementState] = useState(false);
  const [thirdElementState, setThirdElementState] = useState(false);
  const [fourthElementState, setFourthElementState] = useState(false);

  function selectCard(card) {
    switch (card) {
      case 0: {
        setCardSelected0((cardSelected0) => (cardSelected0 = true));
        setCardSelected1((cardSelected1) => (cardSelected1 = false));
        setCardSelected2((cardSelected2) => (cardSelected2 = false));
        setCardSelected3((cardSelected3) => (cardSelected3 = false));

        ///

        setFirstElementState((firstElementState) => (firstElementState = true));
        setSecondElementState((secondElementState) => (secondElementState = false));
        setThirdElementState((thirdElementState) => (thirdElementState = false));
        setFourthElementState((fourthElementState) => (fourthElementState = false));
        break;
      }
      case 1: {
        setCardSelected0((cardSelected0) => (cardSelected0 = false));
        setCardSelected1((cardSelected1) => (cardSelected1 = true));
        setCardSelected2((cardSelected2) => (cardSelected2 = false));
        setCardSelected3((cardSelected3) => (cardSelected3 = false));

        ///

        setFirstElementState((firstElementState) => (firstElementState = false));
        setSecondElementState((secondElementState) => (secondElementState = true));
        setThirdElementState((thirdElementState) => (thirdElementState = false));
        setFourthElementState((fourthElementState) => (fourthElementState = false));
        break;
      }
      case 2: {
        setCardSelected0((cardSelected0) => (cardSelected0 = false));
        setCardSelected1((cardSelected1) => (cardSelected1 = false));
        setCardSelected2((cardSelected2) => (cardSelected2 = true));
        setCardSelected3((cardSelected3) => (cardSelected3 = false));

        ///

        setFirstElementState((firstElementState) => (firstElementState = false));
        setSecondElementState((secondElementState) => (secondElementState = false));
        setThirdElementState((thirdElementState) => (thirdElementState = true));
        setFourthElementState((fourthElementState) => (fourthElementState = false));
        break;
      }
      case 3: {
        setCardSelected0((cardSelected0) => (cardSelected0 = false));
        setCardSelected1((cardSelected1) => (cardSelected1 = false));
        setCardSelected2((cardSelected2) => (cardSelected2 = false));
        setCardSelected3((cardSelected3) => (cardSelected3 = true));

        ///

        setFirstElementState((firstElementState) => (firstElementState = false));
        setSecondElementState((secondElementState) => (secondElementState = false));
        setThirdElementState((thirdElementState) => (thirdElementState = false));
        setFourthElementState((fourthElementState) => (fourthElementState = true));
        break;
      }
    }
  }

  function switchPages() {
    history.push("/create-account");
  }

  return (
    <main>
      <article className='LP'>
        <header>
          <img src={logo} alt='Logo' className='logo' />
          <ul className='topButtonsWrapper'>
            <li>
              <div className='button hvr-grow'>Click if You are Develeoper</div>
            </li>
            <li>
              <div className='button hvr-grow'>Contact for Collaboration</div>
            </li>
            <li>
              <div className='line' />
            </li>
            <li>
              <div className='button_ca hvr-grow' onClick={() => switchPages()}>
                Create Account
              </div>
            </li>
          </ul>
        </header>

        <section className='cardsWrapperLP'>
          <div className={`card ${cardSelected0 ? "selected" : "notSelected"}`} onClick={() => selectCard(0)}>
            <h1>WHAT IS PYRAMID</h1>
            {/* <img src={question_mark_logo} alt='Logo Icon' className='qml_icon' /> */}
          </div>
          <div className={`card ${cardSelected1 ? "selected" : "notSelected"}`} onClick={() => selectCard(1)}>
            <h1>HOW IT WORKS</h1>
            {/* <img src={gears} alt='Gears Icon' className='gears_icon' /> */}
          </div>
          <div className={`card ${cardSelected2 ? "selected" : "notSelected"}`} onClick={() => selectCard(2)}>
            <h1>WHY IT HAS A CHANCE TO WORK OUT</h1>
            {/* <img src={line_chart} alt='Line Chart Icon' className='lc_icon' /> */}
          </div>
          <div className={`card ${cardSelected3 ? "selected" : "notSelected"}`} onClick={() => selectCard(3)}>
            <h1>WHAT YOU CAN GET BY HELPING US</h1>
            {/* <img src={account} alt='account Icon' className='account_icon' /> */}
          </div>
        </section>
        <SecondElement visible={secondElementState} />
        <FourthElement visible={fourthElementState} />
        <FirstElement visible={firstElementState} />
        <ThirdElement visible={thirdElementState} />
      </article>
    </main>
  );
}
export default LandingPage;
