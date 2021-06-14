import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider, useAuth} from './contexts/AuthContext';

//styling
import './App.scss';

//pages
import PrivateRoute from './react/PrivateRoute';
import RegisterPage from './react/RegisterPage';
import ContactPage from './react/ContactPage';
import SupportPage from './react/SupportPage';
import LandingPage from './react/LandingPage';
import SignInPage from './react/SignInPage';
import MainPage from './react/MainPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="appComponent">
          <PrivateRoute path="/" exact component={MainPage} />
          <PrivateRoute path="/home" component={LandingPage} />
          <PrivateRoute path="/register" component={RegisterPage} />
          <PrivateRoute path="/sign-in" component={SignInPage} />
          <PrivateRoute path="/contact" component={ContactPage} />
          <PrivateRoute path="/support" component={SupportPage} />
          <PrivateRoute path="/support/payment" component={SupportPage} />
          <PrivateRoute path="/support/account" component={SupportPage} />
          <PrivateRoute path="/support/security" component={SupportPage} />
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
