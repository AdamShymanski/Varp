import React, {useState} from 'react';

import './../../sass/LandingPageElements/ThirdElement-style.scss';

function ThirdElement(props: any) {
  return (
    <main className={` teWrapper poppinsFont `}>
      <div className="title flexRow">
        <div className="accentLine" />
        <p className="poppinsFont">How you can help?</p>
      </div>
      <div className="cardsWrapper">
        <article className="wideCard c1">
          <h1>
            <div>Create an account</div>
            <span className="addendum"> DO IT NOW AND GET PREMIUM ACCOUNT</span>
          </h1>
          <p>
            Registered users show that the project has interest. This makes
            companies more likely to collaborate with us, which gives Varp a
            chance to grow up. Money from cooperation is a source of income for
            Varp and a source of money for rewards for you. The more registered
            users the better.
          </p>
          <p className="cp-3 ">
            If you create an account at this stage, your account will have
            premium account :
          </p>
          <ul>
            <li>
              <p>
                <span>- </span>You will be able to join the first few games{' '}
                <span> without spending tokens on them</span>
              </p>
            </li>
            <li>
              <p>
                <span>- </span>In the future, you will have to do fewer tasks to
                get a lot of points
              </p>
            </li>
            <li>
              <p>
                <span>- </span>And we will definitely pay you back for your help
              </p>
            </li>
          </ul>
        </article>
        <article className="wideCard">
          <h1>Express your opinion about this project</h1>
          <p>Yes, it's really that simple. </p>
          <p>
            Just write if you think Varp has a chance, what do you like and what
            not, what would you improve and so on ...
          </p>
        </article>
        <article className="wideCard">
          <h1>Tell your friends about Varp</h1>
          <p>
            Just send them a link to our site and summarize what you already
            know about us. It's the best thing you can do for us :D
          </p>
        </article>
      </div>
    </main>
  );
}
export default ThirdElement;
