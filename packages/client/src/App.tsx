import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider, useAuth} from './contexts/AuthContext';

//styling
import './App.scss';

//pages
import PrivateRoute from './react/PrivateRoute';
import RegisterPage from './react/RegisterPage';
import ContactPage from './react/ContactPage';
import LandingPage from './react/LandingPage';
import SignInPage from './react/SignInPage';
import MainPage from './react/MainPage';
import SettingsPage from './react/SettingsPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="appComponent">
          <SettingsPage />
          {/* <PrivateRoute path="/" exact component={MainPage} />
          <PrivateRoute path="/home" component={LandingPage} />
          <PrivateRoute path="/register" component={RegisterPage} />
          <PrivateRoute path="/sign-in" component={SignInPage} />
          <PrivateRoute path="/contact" component={ContactPage} />
          <PrivateRoute path="/settings" component={SettingsPage} /> */}
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
