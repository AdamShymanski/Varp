import React, { useState } from "react";
import "./../../sass/elements/SecondElement-style.scss";

import { makeStyles } from "@material-ui/core/styles";

//material UI icons
import VideogameAssetOutlinedIcon from "@material-ui/icons/VideogameAssetOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import FindInPageOutlinedIcon from "@material-ui/icons/FindInPageOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";

//icons
import expandIcon from "../../resources/icons/expand.svg";
import shrinkIcon from "../../resources/icons/shrink.svg";

const useStyles = makeStyles({
  icon: {
    color: "#f4f4f4",
    fontSize: "5vw",
    marginTop: "1vh",
    fontWeight: "300",
  },
});

const handleCardsClass = (state) => {
  if (state) {
    return "card expanded";
  } else return "shrinked card ";
};
const changeCardsSize = (setFunction) => {
  setFunction();
};

function SecondElement(props) {
  const classes = useStyles();

  const [aState, setA] = useState(false);
  const [bState, setB] = useState(false);
  const [cState, setC] = useState(false);
  const [dState, setD] = useState(false);
  return (
    <main className={`${props.visibility() ? " visible" : "invisible"}`}>
      <article>
        <div className='title poppinsFont flexRow'>
          <div className='accentLine' />
          <p>How it works?</p>
        </div>
      </article>
      <article>
        <div className='bottom flexRow'>
          <div className={handleCardsClass(aState)}>
            <div className='topWrapper flexColumn'>
              <WorkOutlinedIcon className={classes.icon} />
              <h1 className='title poppinsFont'>Collaboration</h1>
            </div>
            <p className='description poppinsFont'>We work with many companies to raise money for the pools</p>
            <p className='bigDescription poppinsFont'>
              This is my job, I'm looking for companys which want to colaborate with Pyramid. It's source of money for
              prizes for winners, but more on that later.
            </p>
            <img src={expandIcon} alt='Expand Icon' className='expandIcon' onClick={() => setA((aState) => !aState)} />
            <img src={shrinkIcon} alt='Shrink Icon' className='shrinkIcon' onClick={() => setA((aState) => !aState)} />
          </div>
          <div className={handleCardsClass(bState)}>
            <div className='topWrapper flexColumn'>
              <FindInPageOutlinedIcon className={classes.icon} />
              <h1 className='title poppinsFont'>Your Job</h1>
            </div>
            <p className='description poppinsFont'>Complete the tasks to get the tokens needed to join the game</p>
            <p className='bigDescription poppinsFont'>
              Your task is to get acquainted with Pyramid's collaborators and their offer, as part of the task you could
              be requested to express your opinion about them, create an account on their website or just leave them
              your contact details. After completing the task, you receive tokens that will allow you to join the game.
              Remember that the amount tokens required to join the game is different each time, and largely depends on
              the pool of money allocated for the prize.
            </p>
            <img src={expandIcon} alt='Expand Icon' className='expandIcon' onClick={() => setB((bState) => !bState)} />
            <img src={shrinkIcon} alt='Shrink Icon' className='shrinkIcon' onClick={() => setB((bState) => !bState)} />
          </div>
          <div className={handleCardsClass(cState)}>
            <div className='topWrapper flexColumn'>
              <VideogameAssetOutlinedIcon className={classes.icon} />
              <h1 className=' title poppinsFont'>Game</h1>
            </div>

            <p className='description poppinsFont'>Enjoy competition and play with other players in arcade games</p>
            <p className='bigDescription poppinsFont'>
              The game is very simple, you need to score as many points as possible in mini-games. When finished, the
              scores are compared and the few people with the most points win the pot of money. Mini-games are usually
              arcade games, board games and other games of this type. The most important feature is their simplicity
            </p>
            <img src={expandIcon} alt='Expand Icon' className='expandIcon' onClick={() => setC((cState) => !cState)} />
            <img src={shrinkIcon} alt='Shrink Icon' className='shrinkIcon' onClick={() => setC((cState) => !cState)} />
          </div>
          <div className={handleCardsClass(dState)}>
            <div className='topWrapper flexColumn'>
              <AttachMoneyOutlinedIcon className={classes.icon} />
              <h1 className='title poppinsFont'>Prize</h1>
            </div>
            <p className='description poppinsFont'>
              If you are among the winners, collect your prize in cash on the same day
            </p>
            <p className='bigDescription poppinsFont'>
              The prize is a pool of money, usually around $300, if you find yourself in the group of winners you will
              receive cash in your bank account or PayPal. It is worth noting that you receive actual cash with your
              withdrawal, not gift cards or other such rewards.
            </p>
            <img src={expandIcon} alt='Expand Icon' className='expandIcon' onClick={() => setD((dState) => !dState)} />
            <img src={shrinkIcon} alt='Shrink Icon' className='shrinkIcon' onClick={() => setD((dState) => !dState)} />
          </div>
        </div>
      </article>
    </main>
  );
}
export default SecondElement;
