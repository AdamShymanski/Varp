import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';

//styling
import './App.scss';

//pages
import PrivateRoute from './react/PrivateRoute';

import LandingPage from './react/LandingPage';
import RegisterPage from './react/RegisterPage';
import SignInPage from './react/SignInPage';
import MainPage from './react/MainPage';
import SettingsPage from './react/SettingsPage';

import ContactPage from './react/ContactPage';
import SupportPage from './react/SupportPage';

import AccountPage from './react/SupportPage/AccountPage';

import LoadingPage from './react/LoadingPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="appComponent">
          <PrivateRoute path="/" exact component={MainPage} />
          <PrivateRoute path="/home" component={LandingPage} />
          <PrivateRoute path="/sign-in" component={SignInPage} />
          <PrivateRoute path="/register" component={RegisterPage} />
          <PrivateRoute path="/settings" component={SettingsPage} />
          <PrivateRoute path="/contact" component={ContactPage} />
          <PrivateRoute path="/support" exact component={SupportPage} />
          <PrivateRoute path="/support/payment" component={SupportPage} />
          <PrivateRoute path="/support/account" component={AccountPage} />
          <PrivateRoute path="/support/security" component={SupportPage} />

          <PrivateRoute path="/loading" component={LoadingPage} />
          <Route
            path="/linkedIn"
            component={() => {
              window.location.href =
                'https://www.linkedin.com/company/varp-marketing';
              return null;
            }}
          />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
