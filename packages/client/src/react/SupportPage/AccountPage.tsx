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
import varpsearch from './../resources/icons/varp-search.svg'

function AccountPage() {
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
        <div className="search__area">
          <input type="search" className="poppinsFont" placeholder="Search for articles"/>
          <img src={varpsearch} />
        </div>
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
export default AccountPage;
