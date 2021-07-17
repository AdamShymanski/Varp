import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import './../sass/SupportPage-style.scss';

import {Button} from '@varp/ui';

import {writeStorage} from '@rehooks/local-storage';

//resources
import logo from './../resources/icons/logo.png';
import just_logo from './../resources/icons/just-logo.png';

import twitter from './../resources/icons/twitter.png';
import instagram from './../resources/icons/instagram.png';
import linkedIn from './../resources/icons/linkedin.png';

import payout from './../resources/icons/payout-hc.svg';
import account from './../resources/icons/account-hc.svg';
import security from './../resources/icons/lock.svg';
import contact from './../resources/icons/contact.svg';
import privacy_policy from './../resources/icons/privacy-policy.png';

import varpuser from './../resources/icons/varp-user.svg';
import varplock from './../resources/icons/varp-lock.svg';
import varpcard from './../resources/icons/varp-card.svg';
import varpsearch from './../resources/icons/varp-search.svg';

function SupportPage() {
  const history = useHistory();

  writeStorage('path', '/support');

  const pushToLinkedIn = () => history.push('/linkedIn');
  const pushToAccount = () => history.push('/support/account');
  const pushToPayment = () => history.push('/support/payment');
  const pushToSecurity = () => history.push('/support/security');

  const pushToSupport = () => history.push('/support');
  const pushToContact = () => history.push('/contact');

  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="spWrapper flexColumn">
      {/* <header className="flexRow">
        <div className="logoWrapper flexRow">
          <img
            src={logo}
            onClick={() => {
              history.push('/home');
            }}
          />
          <p className="site__section__title flexRow poppinsFont">Support</p>
        </div>

        <div className="logoWrapper flexRow"></div>

        <aside className="flexRow">
          <ul className="headerList flexRow poppinsFont">
            <li>Collaboration</li>
            <li>Business</li>
            <li>Contact</li>
          </ul>
          <div className="flexRow btnWrapper">
            <Button children={'Register'} action={pushToRegister} />
            <p>or</p>
            <Button children={'Sign In'} action={pushToSignIn} />
          </div> 
        </aside>
      </header> */}

      <header className="flexRow">
        <div className="logoWrapper flexRow">
          <img
            src={logo}
            onClick={() => {
              history.push('/home');
            }}
          />
          <p className="site__section__title flexRow poppinsFont">Support</p>
        </div>
        <svg
          id="hamburger"
          width="25"
          height="85px"
          viewBox="0 0 25 18"
          fill="none"
          onClick={() => setHamburger(!hamburger)}
        >
          <path d="M1 1H25" stroke="white" fill="white" />
          <path d="M0 17H25" stroke="white" />
          <path d="M0 9H25" stroke="white" />
        </svg>
        <aside className={`flexRow ${hamburger && 'active'}`}>
          <ul className="headerList flexRow poppinsFont">
            <li onClick={pushToSupport}>Collaboration</li>
            <li>Business</li>
            <li onClick={pushToContact}>Contact</li>
          </ul>
        </aside>
      </header>
      <main className="flexColumn poppinsFont mainSection">
        <h1>Help Center</h1>
        <div className="search__area">
          <input
            type="search"
            className="poppinsFont"
            placeholder="Search for articles"
          />
          <img src={varpsearch} />
        </div>
        <div className="help__center__content">
          <div className="item" onClick={pushToPayment}>
            <img src={payout} alt="payment and billing" />
            <p>Payment and Billing</p>
          </div>
          <div className="item" onClick={pushToAccount}>
            <img src={account} alt="account" />
            <p>Account</p>
          </div>
          <div className="item" onClick={pushToSecurity}>
            <img src={security} alt="security" />
            <p>Security</p>
          </div>
          <div className="item" onClick={pushToPayment}>
            <img src={contact} alt="payment and billing" />
            <p>Contact</p>
          </div>
          <div className="item" onClick={pushToAccount}>
            <img src={privacy_policy} alt="account" />
            <p>Privacy Policy</p>
          </div>
        </div>
      </main>

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
export default SupportPage;
