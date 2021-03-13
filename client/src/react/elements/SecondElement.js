import React, { useState } from "react";
import "./../../sass/elements/SecondElement-style.scss";

//icons
import act from "./../../resources/icons/act.svg";
import game from "./../../resources/icons/game.svg";
import arrow from "./../../resources/icons/arrow.svg";
import money from "./../..//resources/icons/money.svg";
import searching from "./../../resources/icons/searching.svg";

//material UI
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  downwardsArrow: {
    color: "#0082ff",
    fontSize: "3.4vw",
    position: "absolute",
    top: "2.5vh",
    right: "-4.4vw",
  },
  searchIcon: {
    color: "#ff1d00",
    fontSize: "6.5vw",
    fontWeight: "400",
  },
});

export default function CardsElement(props) {
  const classes = useStyles();

  const [isDisabled1, setDisabled1] = useState(false);
  const [isDisabled2, setDisabled2] = useState(false);
  const [isDisabled3, setDisabled3] = useState(false);
  const [isDisabled4, setDisabled4] = useState(false);

  const [firstCardToggle, setFirstCard] = useState(false);
  const [secondCardToggle, setSecondCard] = useState(false);
  const [thirdCardToggle, setThirdCard] = useState(false);
  const [fourthCardToggle, setFourthCard] = useState(false);

  function toggleCard(card) {
    switch (card) {
      case 1:
        setFirstCard((firstCardToggle) => !firstCardToggle);

        setDisabled1((isDisabled1) => !isDisabled1);
        setTimeout(() => {
          setDisabled1((isDisabled1) => !isDisabled1);
        }, 210);
        break;
      case 2:
        setSecondCard((secondCardToggle) => !secondCardToggle);

        setDisabled2((isDisabled2) => !isDisabled2);
        setTimeout(() => {
          setDisabled2((isDisabled2) => !isDisabled2);
        }, 210);
        break;
      case 3:
        setThirdCard((thirdCardToggle) => !thirdCardToggle);

        setDisabled3((isDisabled3) => !isDisabled3);
        setTimeout(() => {
          setDisabled3((isDisabled3) => !isDisabled3);
        }, 210);
        break;
      case 4:
        setFourthCard((fourthCardToggle) => !fourthCardToggle);

        setDisabled4((isDisabled4) => !isDisabled4);
        setTimeout(() => {
          setDisabled4((isDisabled4) => !isDisabled4);
        }, 210);
        break;
    }
  }

  return (
    <section className={`wrapper-1 ${props.visible ? "visible" : "notVisible"}`}>
      <aside>
        <div className='card'>
          <div className='topCard'>
            <img src={act} alt='Act Icon' className='act' />
            <ArrowForwardIcon className={classes.downwardsArrow} />
          </div>
          <div className='titleCard'>
            <h1>Collaboration</h1>
            <p>We work with many companies to raise money for the pools</p>
          </div>
          <div className={`bottomCard ${firstCardToggle ? "show1" : "hide"}`}>
            <p>
              This is my job, I'm looking for companys which want to colaborate with Pyramid. It's source of money for
              prizes for winners, but more on that later.
            </p>
            <img
              src={arrow}
              alt='Arrow Icon'
              className='arrow'
              disabled={isDisabled1}
              onClick={() => {
                toggleCard(1);
              }}
            />
            <div className='curtain'></div>
          </div>
        </div>
        <div className='card'>
          <div className='topCard'>
            <img src={searching} alt='searching Icon' className='searching' />
            <ArrowForwardIcon className={classes.downwardsArrow} />
          </div>
          <div className='titleCard'>
            <h1>Your job</h1>
            <p>Complete the tasks to get the tokens needed to join the game</p>
          </div>
          <div className={`bottomCard ${secondCardToggle ? "show2" : "hide"}`}>
            <p>
              Your task is to get acquainted with Pyramid's collaborators and their offer, as part of the task you could
              be requested to express your opinion about them, create an account on their website or just leave them
              your contact details.
            </p>
            <p>
              After completing the task, you receive tokens that will allow you to join the game. Remember that the
              amount tokens required to join the game is different each time, and largely depends on the pool of money
              allocated for the prize.
            </p>
            <img
              src={arrow}
              alt='Arrow Icon'
              className='arrow'
              disabled={isDisabled2}
              onClick={() => {
                toggleCard(2);
              }}
            />
            <div className='curtain'></div>
          </div>
        </div>
        <div className='card'>
          <div className='topCard'>
            <img src={game} alt='Game Icon' className='game' />
            <ArrowForwardIcon className={classes.downwardsArrow} />
          </div>
          <div className='titleCard'>
            <h1>Game</h1>
            <p>Enjoy competition and play with other players in arcade games</p>
          </div>
          <div className={`bottomCard ${thirdCardToggle ? "show3" : "hide"}`}>
            <p>
              The game is very simple, you need to score as many points as possible in mini-games. When finished, the
              scores are compared and the few people with the most points win the pot of money.
            </p>
            <p>
              Mini-games are usually arcade games, board games and other games of this type. The most important feature
              is their simplicity
            </p>
            <p>For example...</p>
            <ul>
              <li>Mario</li>
              <li>Pac-Man</li>
              <li>Galaga</li>
              <li>Doneky Kong</li>
              <li>Icu Tower</li>
              <li>Snake</li>
              <li>And so on...</li>
            </ul>
            <img
              src={arrow}
              alt='Arrow Icon'
              className='arrow'
              disabled={isDisabled3}
              onClick={() => {
                toggleCard(3);
              }}
            />
            <div className='curtain'></div>
          </div>
        </div>
        <div className='card'>
          <div className='topCard'>
            <img src={money} alt='Money Icon' className='money' />
          </div>
          <div className='titleCard'>
            <h1>Prize</h1>
            <p>If you are among the winners, collect your prize in cash on the same day</p>
          </div>
          <div className={`bottomCard ${fourthCardToggle ? "show4" : "hide"}`}>
            <p>
              The prize is a pool of money, usually around $300, if you find yourself in the group of winners you will
              receive cash in your bank account or PayPal. It is worth noting that you receive actual cash with your
              withdrawal, not gift cards or other such rewards.
            </p>
            <img
              src={arrow}
              alt='Arrow Icon'
              className='arrow'
              disabled={isDisabled4}
              onClick={() => {
                toggleCard(4);
              }}
            />
            <div className='curtain'></div>
          </div>
        </div>
      </aside>
    </section>
  );
}
