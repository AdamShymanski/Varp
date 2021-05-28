import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import './../sass/LandingPage-style.scss';

import {Button} from '@varp/ui';

//resources
import logo from './../resources/icons/logo.png';
import mockup from './../resources/mockup.png';

import hamburger from './../resources/icons/hamburger-menu.svg';

import clock from './../resources/illustrations/clock.png';
import hand from './../resources/illustrations/hand_money.png';
import podium from './../resources/illustrations/podium.png';
import file from './../resources/illustrations/lock_file.png';
import inputs from './../resources/illustrations/inputs_ill.png';

function LandingPage() {
  const history = useHistory();

  const pushToRegister = () => history.push('/register');
  const pushToSignIn = () => history.push('/sign-in');
  const pushToContact = () => history.push('/contact');

  return (
    <div className="lpWrapper flexColumn">
      <header className="flexRow">
        <img src={logo} />
        <aside className="flexRow">
          <ul className="headerList flexRow poppinsFont">
            <li>Collaboration</li>
            <li>Business</li>
            <li>Contact</li>
          </ul>
          <div className="flexRow btnWrapper">
            <Button />
            <p>or</p>
            <Button />
          </div>
        </aside>
      </header>
      <main className="flexColumn poppinsFont mainSection">
        <h1>Earn money for performing simple tasks</h1>
        <p>
          We're turning the CPA marketing monetization model upside down. We add
          an element of competition, shorten the time and significantly improve
          the overall comfort of this way of earning. Even $20 in 15 minutes.
        </p>
        <Button size="huge" />
        <div className="mockupWrapper flexRow">
          <div className="shadowHandler1" />
          <img src={mockup} />
          <div className="shadowHandler2" />
        </div>
      </main>
      <article className="featuresArt poppinsFont">
        <div className="flexRow">
          <img src={hand} className="hand" />
          <div className="featureContent">
            <h3>Payouts in real cash</h3>
            <p>
              <span>More freedom.</span> If you win we just pay you your money,
              we don't care where or what you spend it on, it's your choice.
            </p>
          </div>
        </div>
        <div className="flexRow">
          <img src={clock} className="clock" />
          <div className="featureContent">
            <h3>Up to 3 times faster</h3>
            <p>
              <span>Competition is our way.</span> By taking up a fight for a
              prize in arcade games, we can reduce the time you would have to
              spend to get a prize.
            </p>
          </div>
        </div>
        <div className="flexRow">
          <img src={file} className="file" />
          <div className="featureContent">
            <h3>Your data is safe</h3>
            <p>
              <span>Enhanced privacy.</span> Although you share your data with
              other companies you can fully control the content that is sent to
              them. Even data already stored by us must be authorized by you
              before it is shared.
            </p>
          </div>
        </div>
        <div className="flexRow">
          <img src={podium} className="podium" />
          <div className="featureContent">
            <h3>Competitive element</h3>
            <p>
              <span>Add some excitement.</span> With arcade games competition
              you also get to enjoy playing against other players, it really is
              addictive.
            </p>
          </div>
        </div>
      </article>
      <article className="nrpArt flexRow">
        <div className="textContainer poppinsFont">
          <h4>TIME SAVER</h4>
          <h1>We remember your answers</h1>
          <p>
            <span>Increased efficiency.</span> By saving previous responses, we
            can use
            <span className="accentSpan"> AutoFill</span> to reduce the time
            needed to complete the survey by up to 40%.
          </p>
        </div>
        <img src={inputs} />
        <aside className="inputIllustration"></aside>
      </article>
      <article className="faqArt flexRow">
        <div className="textContainer poppinsFont">
          <h4>GET TO KNOW VARP</h4>
          <h1>Frequently Asked Questions</h1>
          <p>
            <span>Increased efficiency.</span> By saving previous responses, we
            can use
            <span className="accentSpan"> AutoFill</span> to reduce the time
            needed to complete the survey by up to 40%.
          </p>
        </div>
        <aside></aside>
      </article>
      <article className="complicatedArt"></article>
      <footer></footer>
    </div>
  );
}
export default LandingPage;
