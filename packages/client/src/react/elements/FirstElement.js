import React, { useState, useEffect } from "react";
import "./../../sass/elements/FirstElement-style.scss";

import { makeStyles } from "@material-ui/core/styles";
import AlarmIcon from "@material-ui/icons/Alarm";
import BusinessIcon from "@material-ui/icons/Business";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles({
  accountIcon: {
    color: "#f4f4f4",
    fontSize: "4.8vw",
    marginTop: "1vh",
  },
});
function FirstElement(props) {
  const classes = useStyles();

  return (
    <main className={`${props.visibility() ? " visible" : "invisible"}`}>
      <article>
        <div className='title poppinsFont flexRow'>
          <div className='accentLine' />
          <p>What Pyramid is?</p>
        </div>
        <div className='body poppinsFont'>
          <p>
            It's a platform where users can compete against each other for a pot of money in mini-games like Galaga, Pac
            Man, Snake and other simple arcade games. To join the game, each player must complete several tasks that do
            not take more than 10 minutes. Tasks are, for example, visiting the sponsor's website, leaving him your
            email address, sharing your opinion about his product or filling out a short questionnaire. For completing
            tasks, the user receives tokens that can later be exchanged for participation in the game. The number of
            tokens needed to join the game is different each time and depends on the size of the money pool that can be
            won.
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
            proud of them and want to share them with you, but that's not the only goal. They also show how many fim and
            people trust us and how engaged community we create. You can join it today!
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
    </main>
  );
}

export default FirstElement;
