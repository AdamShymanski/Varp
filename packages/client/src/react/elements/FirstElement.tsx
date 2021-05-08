import React, {useState, useEffect} from 'react';
import './../../sass/elements/FirstElement-style.scss';

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
            This will be a web application where young people can compete in
            arcade games like Pac-Man, Icy Tower, Snake and so on for money.
          </p>
          <p>
            Overall simple, easy games. Varp will be an{' '}
            <span>alternative to tediously filling out surveys</span> on
            Swagbucks type sites.
          </p>
          <p>
            Varp adds <span>risk</span> and an element of competition between
            users to this model. We noticed that young people want to compete
            for money rather than have a certain profit.
          </p>
          <p>
            In order to take part in the game, the player has to perform several
            tasks consisting of visiting the sponsor's website, filling in a
            short questionnaire and other such tasks. Time to complete the tasks
            will not exceed <span>10 minutes</span>.
          </p>
          <p>
            After completing them you will receive tokens for which you will be
            able to take part in the game In Varp the potential earnings from
            the tasks of all the players are added together{' '}
            <span>creating a pool </span>
            which only a few winners will win.
          </p>
          <p>
            This way, players can get their money much <span>faster</span> and
            in a <span>more interesting way</span>. All prizes are paid out in{' '}
            <span>cash</span>.
          </p>
        </div>
      </article>
      <article>
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
      </article>
    </main>
  );
}

export default FirstElement;
