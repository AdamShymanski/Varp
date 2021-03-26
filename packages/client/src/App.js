import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//styling
import "./App.scss";

//pages
import LandingPageNew from "./react/LandingPageNew";
import SignUpPage from "./react/SignUpPage";
// import FormPage from "./react/FormPage";

function App() {
  return (
    <Router>
      <div className='appComponent'>
        <Route path='/' exact component={LandingPageNew} />
        <Route path='/sign-up' component={SignUpPage} />
      </div>
    </Router>
  );
}

export default App;
