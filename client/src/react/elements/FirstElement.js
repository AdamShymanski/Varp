import React, { useState, useEffect } from "react";
import "./../../sass/elements/FirstElement-style.scss";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { makeStyles } from "@material-ui/core/styles";

import Axios from "axios";

const useStyles = makeStyles({
  accountIcon: {
    color: "#ffffff",
    fontSize: "4.8vw",
    position: "absolute",
    left: "4vw",
  },
  timerIcon: {
    color: "#ffffff",
    fontSize: "4.8vw",
    position: "absolute",
    left: "0.3vw",
    marginTop: "2vh",
  },
});

function FirstElement(props) {
  const classes = useStyles();
  const [accountsNumber, setAccountsNumber] = useState();

  useEffect(async () => {
    try {
      const response = await Axios.post("http://localhost:5000/set_up_data/get_data");
      setAccountsNumber((accountsNumber) => (accountsNumber = response.data.response));
    } catch (err) {
      // console.log(err.response.data);
    }
  }, []);

  return (
    <section className={`wrapper-0 ${props.visible ? "visible" : "notVisible"}`}>
      <div className='cardsWrapper'>
        <div className='horizontalCard0 hvr-grow'>
          <h1>
            Pyramid is<span>...............</span>
          </h1>
          <ul>
            <li>
              A platform where users can compete against each other for a pot of money in mini-games like Galaga, Pac
              Man, Snake and other simple arcade games.
            </li>
            <li>To joining the game, each player must complete several tasks that do not take more than 10 minutes.</li>
            <li>
              Tasks are, for example, visiting the sponsor's website, leaving him your e-mail address, sharing your
              opinion about his product or filling out a short questionnaire.
            </li>
            <li>
              For completing tasks, the user receives tokens that can later be exchanged for participation in the game.
              The number of tokens needed to join the game is different each time and depends on the size of the money
              pool that can be won.
            </li>
          </ul>
        </div>
        <div className='bottomCards'>
          <div className='verticalCard hvr-grow'>
            <div className='hearderTextWrapper'>
              <AccountBoxIcon className={classes.accountIcon} />
              <h1 className='accountsNumberHeader'>{accountsNumber}</h1>
            </div>
            <p>
              Number of people who trusted Pyramid and <br></br>have already created an account
            </p>
            <p>
              All of them earned an <span>premium account</span>
            </p>
          </div>

          <div className='horizontalCard1 hvr-grow'>
            <h1>What problem does Pyramid solve?</h1>
            <p>
              <span>- </span>With <span>Pyramid</span> it's now possible, you can compete with others for up to{" "}
              <span>$500</span> in prizes <span>without any contribution</span>
            </p>
            <p>
              <span>- </span>The games take place <span>several times a day</span> and are comprised of mini arcade
              games
            </p>
            <p>
              <span>- </span>You only need to <span>complete the few tasks</span> to enter the game. For more
              information, go to "<span>How it works?</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstElement;
