import React from "react";
import "./../../sass/elements/ThirdElement-style.scss";

export default function FourthElement(props) {
  return (
    <main className={`${props.visibility() ? " visible" : "invisible"}`}>
      <section className={`wrapper-3 ${props.visible ? "visible" : "notVisible"}`}>
        <div className='headersContainer'>
          <h1>I need your help!</h1>
          <h2>
            There are <span>3 ways</span> you can help me build this project and create
            <span> reality out of a dream</span>
          </h2>
        </div>
        <div className='cardContainer'>
          <div className='card firstCard hvr-grow'>
            <h1>
              <span>1.</span> Express your opinion about this project
            </h1>
            <p>Yes, it's really that simple. I'm working alone and I miss other people's opinions about my idea.</p>
            <p>
              Just write if you think Pyramid has a chance, what do you like and what not, what would you improve and so
              on ...
            </p>
          </div>
          <div className='card secondCard hvr-grow'>
            <h1>
              <span>2.</span> Create an account -{" "}
              <span className='addendum'> DO IT NOW AND GET PREMIUM PRIVILAGES</span>
            </h1>
            <p>This is very important.</p>
            <p>
              Registered users show that the project has interest. This makes companies more likely to collaborate with
              us, which gives Pyramid a chance to grow. Money from cooperation is a source of income for Pyramid and a
              source of money for rewards for you. The more registered users the better.
            </p>
            <p className='cp-3'>If you create an account at this stage, your account will have premium privileges :</p>
            <ul>
              <li>
                <p>
                  <span>- </span>You will be able to join the first few games <span> for free</span>
                </p>
              </li>
              <li>
                <p>
                  <span>- </span>In the future, you will have to do fewer tasks to get a lot of points
                </p>
              </li>
              <li>
                <p>
                  <span>- </span>And I will definitely pay you back for your help
                </p>
              </li>
            </ul>
          </div>
          <div className='card thirdCard hvr-grow'>
            <h1>
              <span>3.</span> Tell your friends about Pyramid
            </h1>
            <p>
              Just send them a link to our site and summarize what you already know about us. It's the best thing you
              can do for me :)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
