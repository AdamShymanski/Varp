import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import '../../sass/supportPage/AccountPage-style.scss';

import {Button, Answer} from '@varp/ui';

//resources
import logo from './../../resources/icons/logo.png';
import just_logo from './../../resources/icons/just-logo.png';

import twitter from './../../resources/icons/twitter.png';
import instagram from './../../resources/icons/instagram.png';
import linkedIn from './../../resources/icons/linkedin.png';

import varpuser from './../../resources/icons/varp-user.svg'
import varplock from './../../resources/icons/varp-lock.svg'
import varpcard from './../../resources/icons/varp-card.svg'
import varpsearch from './../../resources/icons/varp-search.svg'

function AccountPage() {
  const history = useHistory();

  const pushToLinkedIn = () => history.push('/linkedIn');

  return (
    <div className="spWrapper flexColumn">
      <header className="flexRow">
        <img src={logo} />

          <p className="site__section__title flexRow poppinsFont">
            Support
          </p>
        
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
        <h1 className="mainSection__title">Help Center</h1>
        <ul className="breadcump flexRow poppinsFont">
            <li>Support</li>
        </ul>
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
