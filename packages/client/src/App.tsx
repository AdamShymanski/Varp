import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider, useAuth} from './contexts/AuthContext.js';

//styling
import './App.scss';

//pages
import PrivateRoute from './react/PrivateRoute';
import RegisterPage from './react/RegisterPage';
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
          <Route path="/register" component={RegisterPage} />
          <Route path="/sign-in" component={SignInPage} />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
