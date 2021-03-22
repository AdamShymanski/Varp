import React, { useState } from "react";
import "./../sass/CreateAccountPage-style.scss";

//page
// import FormPage from "./FormPage";

import Axios from "axios";

export default function CreateAccountPage() {
  const [spanHighlight1, setHighlight1] = useState(false);
  const [spanHighlight2, setHighlight2] = useState(false);
  const [spanHighlight3, setHighlight3] = useState(false);
  const [spanHighlight4, setHighlight4] = useState(false);
  const [spanHighlight5, setHighlight5] = useState(false);

  const showButtonAnimation = () => {
    setDisabled((isDisabled) => !isDisabled);
    setTimeout(() => {
      setDisabled((isDisabled) => !isDisabled);
    }, 510);
    setHighlight1((spanHighlight1) => !spanHighlight1);
    setTimeout(() => {
      setHighlight1((spanHighlight1) => !spanHighlight1);
    }, 90);
    setTimeout(() => {
      setHighlight2((spanHighlight2) => !spanHighlight2);
    }, 90);
    setTimeout(() => {
      setHighlight2((spanHighlight2) => !spanHighlight2);
    }, 180);
    setTimeout(() => {
      setHighlight3((spanHighlight3) => !spanHighlight3);
    }, 180);
    setTimeout(() => {
      setHighlight3((spanHighlight3) => !spanHighlight3);
    }, 270);
    setTimeout(() => {
      setHighlight4((spanHighlight4) => !spanHighlight4);
    }, 270);
    setTimeout(() => {
      setHighlight4((spanHighlight4) => !spanHighlight4);
    }, 350);
    setTimeout(() => {
      setHighlight5((spanHighlight5) => !spanHighlight5);
    }, 350);
    setTimeout(() => {
      setHighlight5((spanHighlight5) => !spanHighlight5);
    }, 430);
  };

  const [isDisabled, setDisabled] = useState(false);

  const [approveState, setApproveState] = useState(true);

  const [efMessage, setEf] = useState();
  const [fnfMessage, setFnf] = useState();
  const [ufMessage, setUf] = useState();
  const [pfMessage, setPf] = useState();
  const [pcfMessage, setPcf] = useState();

  //Register
  const [fullName, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [username, setUsername] = useState();

  let keyOfError;
  let valueOfError;

  function errorHandler(errorVariable) {
    errorVariable.forEach(function (message) {
      valueOfError = Object.values(message);
      keyOfError = Object.keys(message);

      if (keyOfError == "ef") {
        setEf((efMessage) => (efMessage = valueOfError));
      }
      if (keyOfError == "fnf") {
        setFnf((fnfMessage) => (fnfMessage = valueOfError));
      }
      if (keyOfError == "uf") {
        setUf((ufMessage) => (ufMessage = valueOfError));
      }
      if (keyOfError == "pf") {
        setPf((pfMessage) => (pfMessage = valueOfError));
      }
      if (keyOfError == "pcf") {
        setPcf((pcfMessage) => (pcfMessage = valueOfError));
      }
    });
  }

  const submit = async (e) => {
    e.preventDefault();
    showButtonAnimation();

    try {
      const newUser = { email, username, fullName, password, passwordCheck };
      const registerRes = await Axios.post("http://localhost:5000/user/register", newUser);
      const signInRes = await Axios.post("http://localhost:5000/user/signin", {
        email,
        password,
      });
      localStorage.setItem("auth-token", signInRes.data.token);

      if (signInRes.data.token && registerRes.data.user_saved) {
        setApproveState((approveState) => (approveState = false));
      }
    } catch (err) {
      let errorVariable = err.response.data.errorContainer;
      console.log(err);
      errorHandler(errorVariable);
    }
  };

  if (approveState) {
    return (
      <main className='CAP'>
        <div className='action-window'>
          <form action='#' className='action-form signIn' autoComplete='off'>
            <div className={"input-wrapper"}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Email'
                className={"f-input"}
                autoComplete='off'
              />
              <p>
                <span className={`accentSpan ${efMessage ? "visible" : "hide"}`}> {">"} </span>
                {efMessage}
              </p>
            </div>
            <div className='input-wrapper'>
              <input
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
                className={"f-input"}
                autoComplete='off'
              />
              <p>
                <span className={`accentSpan ${ufMessage ? "visible" : "hide"}`}> {">"} </span>
                {ufMessage}
              </p>
            </div>
            <div className='input-wrapper'>
              <input
                type='text'
                onChange={(e) => setFullname(e.target.value)}
                placeholder='Full Name'
                className={"f-input"}
                autoComplete='off'
              />
              <p>
                <span className={`accentSpan ${fnfMessage ? "visible" : "hide"}`}> {">"} </span>
                {fnfMessage}
              </p>
            </div>
            <div className='input-wrapper'>
              <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className={"f-input"}
                autoComplete='off'
              />

              <p>
                <span className={`accentSpan ${pfMessage ? "visible" : "hide"}`}> {">"} </span>
                {pfMessage}
              </p>
            </div>
            <div className='input-wrapper'>
              <input
                type='password'
                onChange={(e) => setPasswordCheck(e.target.value)}
                placeholder='Confirm Password'
                className={"f-input"}
                autoComplete='off'
              />

              <p>
                <span className={`accentSpan ${pcfMessage ? "visible" : "hide"}`}> {">"} </span>
                {pcfMessage}
              </p>
            </div>
          </form>
          <button type='submit' className='submit-button' disabled={isDisabled} onClick={submit}>
            <span className={`${spanHighlight1 ? "span-accent" : "span-white"}`}>{">"}</span>
            <span className={`${spanHighlight2 ? "span-accent" : "span-white"}`}>{">"}</span>
            <span className={`${spanHighlight3 ? "span-accent" : "span-white"}`}>{">"}</span>
            <span className={`${spanHighlight4 ? "span-accent" : "span-white"}`}>{">"}</span>
            <span className={`${spanHighlight5 ? "span-accent" : "span-white"}`}>{">"}</span>
          </button>
        </div>
      </main>
    );
  } else return <FormPage />;
}
