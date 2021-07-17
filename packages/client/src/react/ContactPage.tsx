import React, {useState} from 'react';
import './../sass/ContactPage-style.scss';

import {useHistory} from 'react-router-dom';

import {Button} from '@varp/ui';

import logo from './../resources/icons/logo.png';

import support from './../resources/icons/support.svg';
import hand_shake from './../resources/icons/hand-shake.svg';
import mail from './../resources/icons/mail.svg';

import Ralph from './../resources/team_members/image 4.png';
import Benjamin from './../resources/team_members/image 7.png';
import Natasza from './../resources/team_members/image 6.png';
import Viollette from './../resources/team_members/image 5.png';
import Adrien from './../resources/team_members/image 8.png';

import twitter from './../resources/icons/twitter.png';
import instagram from './../resources/icons/instagram.png';
import linkedIn from './../resources/icons/linkedin.png';

import {writeStorage} from '@rehooks/local-storage';

export default function SignInPage() {
  const history = useHistory();
  writeStorage('path', '/contact');
  const [hamburger, setHamburger] = useState(false);

  const pushToLinkedIn = () => history.push('/linkedIn');

  const pushToRegister = () => history.push('/register');

  return (
    <div className="ctWrapper flexColumn">
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
            <li>Collaboration</li>
            <li>Business</li>
            <li>Contact</li>
          </ul>
        </aside>
      </header>
      <main className="poppinsFont mainSection">
        <ul className={'members'}>
          <li>
            <img src={Ralph} />
            <div className="accentLine" />

            <div className="textWrapper">
              <h1>Ralph Krüger</h1>
              <p>Major investor</p>
            </div>
          </li>
          <li>
            <img src={Benjamin} />
            <div className="accentLine" />
            <div className="textWrapper">
              <h1>Benjamin Waechter</h1>
              <p>First Co-Founder</p>
            </div>
          </li>
          <li>
            <img src={Natasza} />
            <div className="accentLine" />

            <div className="textWrapper">
              <h1>Natasza Borkowska</h1>
              <p>Customer Service Specialist</p>
            </div>
          </li>
          <li>
            <img src={Viollette} />
            <div className="accentLine" />

            <div className="textWrapper">
              <h1>Viollette Ayot</h1>
              <p>Marketing Specialist</p>
            </div>
          </li>
          <li>
            <img src={Adrien} />
            <div className="accentLine" />

            <div className="textWrapper">
              <h1>Adrien Côté</h1>
              <p>Technical Advisor</p>
            </div>
          </li>
        </ul>

        <div className="contactInfoContainer flexColumn">
          <div className={'title'}>
            <img src={support} />
            <p>Customer Service</p>
          </div>
          <div className={'emailAdress flexRow'}>
            <img src={mail} />
            <p>support@varp.io</p>
          </div>
          <div className={'title'}>
            <img src={hand_shake} />
            <p>Business Contact</p>
          </div>
          <div className={'emailAdress flexRow'}>
            <img src={mail} />
            <p>business@varp.io</p>
          </div>
        </div>
        <footer className="akaFooter">
          <div className="top poppinsFont flexColumn"></div>
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
              <Button width={'230px'} action={pushToRegister}>
                Start making money
              </Button>
              <p className="poppinsFont">© 2021 Varp, Inc.</p>
            </div>
          </aside>
        </footer>
      </main>

      {/* <footer>
        <div className="top poppinsFont flexColumn"></div>
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
            <Button width={'230px'}>Start making money</Button>
            <p className="poppinsFont">© 2021 Varp, Inc.</p>
          </div>
        </aside>
      </footer> */}
    </div>
  );
}
