import React, {useState, useEffect} from 'react';
import './../../sass/LandingPageElements/FirstElement-style.scss';

import {makeStyles} from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';

const useStyles = makeStyles({
  accountIcon: {
    color: '#f4f4f4',
    fontSize: '5em',
    marginTop: '1vh',
  },
});
function FirstElement(props: any) {
  const classes = useStyles();

  return (
    <main className={`feWrapper `}>
      <article>
        <div className="title poppinsFont flexRow">
          <div className="accentLine" />
          <p>What is Varp?</p>
        </div>
        <div className="body poppinsFont">
          <p>
            This will begin to be a better way to earn casual income than the
            current sites that allow you to earn on CPA (Cost Per Action)
            marketing.
          </p>
          <p>
            Current offers are around $1.5 for a survey that takes 20-30 minutes
            to complete and the rewards are not paid in cash anyway, but e.g. in
            the form of vouchers to stores. This is terrible! Varp greatly
            reduces the time it takes to complete a task to receive a reward,
            and all money is paid out as a transfer to the user's bank account.
            Our model is based on adding an element of competition for the
            prize. The potential earnings of all users are added together and
            form a pool to be divided among several winners. Winners are
            determined through a game consisting of several smaller stages in
            which players play arcade games (Snake, Flappy Bird, Galaga, etc.).
            We chose this method of competition because it is relatively fair,
            interesting, engaging, and fun.
          </p>

          <ul>
            <li>
              <p>The example scenario of the game-</p>
            </li>
            <li>
              <p>
                <span>- </span>Number of players: 400
              </p>
            </li>
            <li>
              <p>
                <span>- </span>Number of winners: 6
              </p>
            </li>
            <li>
              <p>
                <span>- </span>Pool: 300$
              </p>
            </li>
            <li>
              <p>
                <span>- </span>Prize received by each winner: 50$
              </p>
            </li>
          </ul>

          <p>
            With each stage, half of the players with the lowest score are
            dropped. At the end there are only a few winners who receive their
            share of the pot. It is worth reminding that to join the game it is
            enough to spend about 15 minutes.
          </p>
          <p>
            <span>Pretty good deal, right?</span>
          </p>

          <ul>
            <li>
              <p>What do you get when you use Varp:</p>
            </li>
            <li>
              <p>
                <span>- </span>You save your time
              </p>
            </li>
            <li>
              <p>
                <span>- </span>Competition adds great excitement
              </p>
            </li>
            <li>
              <p>
                <span>- </span>You do not have to perform the same tedious tasks
                over and over again
              </p>
            </li>
            <li>
              <p>
                <span>- </span>You receive real cash
              </p>
            </li>
          </ul>
        </div>
      </article>
      {/* <article>
        <div className="sTitle title poppinsFont flexRow">
          <div className="accentLine" />
          <p>What Varp've already achieved?</p>
        </div>
        <div className="body poppinsFont">
          <p>
            Varp is just getting started. We started about 1 week ago. You can
            see our latest developments below. We are very proud of them and
            want to share them with you, but that's not the only goal. They also
            show how many companies and people trust us and how engaged
            community we create. You can join it today!
          </p>
        </div>
        <div className="cardWrapper">
          <div className="cardF flexColumn">
            <div className="cardContent flexColumn">
              <AccountBoxIcon className={classes.accountIcon} />
              <p className="number poppinsFont">2,000+</p>
              <p className="description poppinsFont">
                Users who have already signed up
              </p>
            </div>
          </div>
          <div className="cardF flexColumn">
            <div className="cardContent flexColumn">
              <BusinessIcon className={classes.accountIcon} />
              <p className="number poppinsFont">21</p>
              <p className="description poppinsFont">
                Trusted cooperating companies
              </p>
            </div>
          </div>
          <div className="cardF flexColumn">
            <div className="cardContent flexColumn">
              <PublicOutlinedIcon className={classes.accountIcon} />
              <p className="number poppinsFont">13</p>
              <p className="description poppinsFont">
                The countries our users come from
              </p>
            </div>
          </div>
        </div>
      </article> */}
    </main>
  );
}

export default FirstElement;
