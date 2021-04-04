import React, { useState } from "react";
import "./../sass/CreateAccountPage-style.scss";

//page
// import FormPage from "./FormPage";

import Axios from "axios";

export default function CreateAccountPage() {
 

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
      <div className="wrapper">
        <h1>Sign Up</h1>
        <p className="description">
        tekst
        </p>
        <div className="">

        </div>
      </div>
        
    );
  } else return <FormPage />;
}
