import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//styling
import "./App.scss";

//pages
// import LandingPage from "./react/LandingPage";
import LandingPageNew from "./react/LandingPageNew";
import CreateAccountPage from "./react/CreateAccountPage";
import FormPage from "./react/FormPage";

//background image
import background from "./resources/background-triangle1c.jpg";

function App() {
  return (
    <Router>
      <div className='appComponent'>
        {/* <img src={background} className='top-background' /> */}

        <Route path='/' exact component={LandingPageNew} />
        <Route path='/create-account' component={CreateAccountPage} />
        <Route path='/questionnaire' component={FormPage} />
      </div>
    </Router>
  );
}

export default App;
