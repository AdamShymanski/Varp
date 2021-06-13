import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import './../sass/SupportPage-style.scss';

import {Button, Answer} from '@varp/ui';

//resources
import logo from './../resources/icons/logo.png';
import just_logo from './../resources/icons/just-logo.png';

import hamburger from './../resources/icons/hamburger-menu.svg';
import search from './../resources/icons/search.svg';
import plus from './../resources/icons/plus.svg';
import minus from './../resources/icons/minus.svg';
import longArrow from './../resources/icons/long-arrow.svg';

import mockup from './../resources/illustrations/mockup.png';
import clock from './../resources/illustrations/clock.svg';
import hand from './../resources/illustrations/hand.svg';
import file from './../resources/illustrations/file.svg';
import inputs from './../resources/illustrations/inputs.svg';
import map from './../resources/illustrations/map.svg';
import shield from './../resources/illustrations/shield.svg';

import twitter from './../resources/icons/twitter.png';
import instagram from './../resources/icons/instagram.png';
import linkedIn from './../resources/icons/linkedin.png';

import varpuser from './../resources/icons/varp-user.svg'
import varplock from './../resources/icons/varp-lock.svg'
import varpcard from './../resources/icons/varp-card.svg'

function LandingPage() {
  const history = useHistory();

  const pushToRegister = () => history.push('/register');
  const pushToSignIn = () => history.push('/sign-in');
  const pushToContact = () => history.push('/contact');
  const pushToLinkedIn = () => history.push('/linkedIn');

  const [faqState, setFaq] = useState({
    first: false,
    second: false,
    third: false,
  });

  const faqSectionSwitch = (number: string) => {
    if (number == 'first') {
      setFaq({first: !faqState.first, second: false, third: false});
    }
    if (number == 'second') {
      setFaq({first: false, second: !faqState.second, third: false});
    }
    if (number == 'third') {
      setFaq({first: false, second: false, third: !faqState.third});
    }
  };

  return (
    <div className="spWrapper flexColumn">
      <header className="flexRow">
        <img src={logo} />

          <ul className="breadcump flexRow poppinsFont">
            <li>Support</li>
          </ul>
        
        <aside className="flexRow">
          <ul className="headerList flexRow poppinsFont">
            <li>Collaboration</li>
            <li>Business</li>
            <li>Contact</li>
          </ul>
          {/* <div className="flexRow btnWrapper">
            <Button children={'Register'} action={pushToRegister} />
            <p>or</p>
            <Button children={'Sign In'} action={pushToSignIn} />
          </div> */}
        </aside>
      </header>
      <main className="flexColumn poppinsFont mainSection">

        <input className="search__area" placeholder="Search for articles"/>
        <div className="help__center__content">
          <div className="item">
            <img src={varpcard} alt="payment and billing"/>
            <p>Payment and Billing</p>
          </div>
          <div className="item">
          <img src={varpuser} alt="account"/>
            <p>Account</p>
          </div>
          <div className="item">
          <img src={varplock} alt="security"/>
            <p>Security</p>
          </div>
          <div className="item">
            <img src={varpcard} alt="payment and billing"/>
            <p>Payment and Billing</p>
          </div>
          <div className="item">
          <img src={varpuser} alt="account"/>
            <p>Account</p>
          </div>
          <div className="item">
          <img src={varplock} alt="security"/>
            <p>Security</p>
          </div>
        </div>
        <h1>Earn SS for performing simple tasks</h1>
        <p>
          We're turning the CPA marketing monetization model upside down. We add
          an element of competition, shorten the time and significantly improve
          the overall comfort of this way of earning. Even $20 in 15 minutes.
        </p>
        <Button
          size="big"
          children={'Get Started'}
          action={pushToRegister}
          variant="icon"
          icon={longArrow}
        />
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
            <h3>Your data is secure</h3>
            <p>
              <span>Enhanced privacy.</span> Although you share your data with
              other companies you can fully control the content that is sent to
              them. Even data already stored by us must be authorized by you
              before it is shared.
            </p>
          </div>
        </div>
        <div className="flexRow shieldDiv">
          <img src={shield} className="shield" />
          <div className="featureContent">
            <h3>You are safe</h3>
            <p>
              <span>High reliability.</span> Each company that wants to
              cooperate with us is thoroughly checked by us. This is how we make
              sure that our users aren't cheated.
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
      </article>
      <article className="faqArt flexRow">
        <div className="textContainer poppinsFont">
          <h4>GET TO KNOW VARP</h4>
          <h1>Frequently Asked Questions</h1>
          <aside className="flexColumn">
            <section className="accordion">
              <div className="flexRow">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing el?</h1>
                <div
                  className={'flexRow'}
                  onClick={() => {
                    faqSectionSwitch('first');
                  }}
                >
                  <img src={`${faqState.first ? minus : plus}`} alt="Expand" />
                </div>
              </div>
              <div className={`content ${faqState.first ? 'animated' : ''}`}>
                <p className={`mainText ${faqState.first ? '' : 'invisible'}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing el?Lorem
                  ipsum dolor sit amet, consectetur adipiscing el?Lorem ipsum
                  dolor sit amet, consectetur adipiscing el?
                </p>
              </div>
            </section>
            <section className="accordion">
              <div className="flexRow">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing el?</h1>
                <div
                  className={'flexRow'}
                  onClick={() => {
                    faqSectionSwitch('second');
                  }}
                >
                  <img src={`${faqState.second ? minus : plus}`} alt="Expand" />
                </div>
              </div>
              <div className={`content ${faqState.second ? 'animated' : ''}`}>
                <p className={`mainText ${faqState.second ? '' : 'invisible'}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing el?Lorem
                  ipsum dolor sit amet, consectetur adipiscing el?Lorem ipsum
                  dolor sit amet, consectetur adipiscing el?
                </p>
              </div>
            </section>
            <section className="accordion">
              <div className="flexRow">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing el?</h1>
                <div
                  className={'flexRow'}
                  onClick={() => {
                    faqSectionSwitch('third');
                  }}
                >
                  <img src={`${faqState.third ? minus : plus}`} alt="Expand" />
                </div>
              </div>
              <div className={`content ${faqState.third ? 'animated' : ''}`}>
                <p className={`mainText ${faqState.third ? '' : 'invisible'}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing el?Lorem
                  ipsum dolor sit amet, consectetur adipiscing el?Lorem ipsum
                  dolor sit amet, consectetur adipiscing el?
                </p>
              </div>
            </section>
          </aside>
        </div>
        <aside className="flexColumn FAQSection">
          <section className="scrHeader flexColumn">
            <div className="searchInputWrapper flexRow">
              <input
                className="scrHeader flexRow poppinsFont"
                placeholder="Search for help"
              />
              <img src={search} />
            </div>
          </section>
          <section className="scrBox">
            <Answer header="Lorem Ipsum" text="Lorem Ipsum" />
            <Answer header="Lorem Ipsum" text="Lorem Ipsum" />
            <Answer header="Lorem Ipsum" text="Lorem Ipsum" />
            <Answer header="Lorem Ipsum" text="Lorem Ipsum" last={true} />
          </section>
        </aside>
      </article>
      <article className="complicatedArt flexRow">
        <div className="textContainer poppinsFont">
          <h4>SIMPLE AND SLEEK</h4>
          <h1>Why it’s so complicated?</h1>
          <p>
            <span> Make it simple.</span> With us, the task of creating an
            account on a site is just a click of a button away. You don't have
            to visit the advertiser's site, all the data comes from your Varp
            profile and the registration process is automated.
          </p>
        </div>
        <img src={map} />
      </article>
      <footer>
        <div className="top poppinsFont flexColumn">
          <img src={just_logo} />
          <p>© 2021 Varp, Inc.</p>
        </div>
        <main className="body poppinsFont flexRow">
          <ul>
            <li className="bold">SITE</li>
            <li>Dashboard</li>
            <li>Site map</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li className="bold">COMPANY</li>
            <li>About Varp</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
          <ul>
            <li className="bold">COMMUNITY</li>
            <li>Help</li>
            <li>Support</li>
            <li>Media kit</li>
          </ul>
        </main>
        <aside>
          <p className="poppinsFont">FOLLOW US</p>
          <div className="row flexRow">
            <div className="icons flexRow">
              <img src={linkedIn} alt="LinkedIn" onClick={pushToLinkedIn} />
              <img src={twitter} alt="Twitter" />
              <img src={instagram} alt="Instagram" />
            </div>
            <Button width={'230px'} children={'Start making money'} />
          </div>
        </aside>
      </footer>
    </div>
  );
}
export default LandingPage;
