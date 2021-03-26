import React, { useState } from "react";
import "./../sass/SignUpPage-style..scss";

import { makeStyles } from "@material-ui/core/styles";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import Axios from "axios";

const useStyles = makeStyles({
  exclamationIcon: {
    color: "#3a3a3a",
    fontSize: "1.4vw",

    left: "23vw",
    position: "absolute",
  },
});

export default function SignUpPage() {
  const classes = useStyles();

  return (
    <div className='wrapper flexColumn'>
      <h1 className='robotoFont'>Sign Up</h1>
      <p className='robotoFont description-s  '>
        Text to accompany header will go here, for now, lorem ipsum impsudo suoas
      </p>
      <form className=' flexColumn'>
        <div className='inputWrapper flexColumn'>
          <p className='label robotoFont' type='email'>
            Email
          </p>
          <input className='robotoFont' />
        </div>

        <div className='inputWrapper flexColumn'>
          <p className='label robotoFont'>Full Name</p>
          <input className='robotoFont' />
        </div>

        <div className='inputWrapper flexColumn'>
          <p className='label robotoFont'>Username</p>
          <input className='robotoFont' />
        </div>

        <div className='inputWrapper flexColumn'>
          <p className='label robotoFont '>Password</p>

          <div className='passowrdInputWrapper flexRow'>
            <input className='robotoFont' type='password' />
            <ErrorOutlineIcon className={classes.exclamationIcon} />
            <div id='talkbubble'></div>
          </div>
        </div>
        <div className='inputWrapper flexColumn'>
          <p className='label robotoFont'>Confrim Password</p>
          <input className='robotoFont' type='password' />
        </div>
        <div className='inputWrapper flexColumn'>
          <p className='label robotoFont'>Age</p>
          <input className='robotoFont' />
        </div>
        <div className='inputWrapper flexColumn'>
          <p className='label robotoFont'>Country</p>
          <input className='robotoFont' />
        </div>
      </form>
      <div className='buttonWrapper'>
        <button className='robotoFont'>Submit</button>
      </div>
    </div>
  );
}
