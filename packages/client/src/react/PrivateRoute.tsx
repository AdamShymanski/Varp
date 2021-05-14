import React, {useEffect} from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  //extend props
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({path, ...rest}) => {
  const {currentUser, loading} = useAuth();

  // if (path !== '/home' && !currentUser) return <Redirect to="/home" />;
  // if (path === '/home' && currentUser) return <Redirect to="/" />;

  // const restrictedPaths = (user: boolean, path: string | undefined) => {
  //   if (path === '/register' && user) {
  //     return <Redirect to="/" />;
  //   }
  //   if (path === '/sign-in' && user) {
  //     return <Redirect to="/" />;
  //   }
  //   if (path === '/home' && user) {
  //     return <Redirect to="/" />;
  //   }
  //   if (path === '/' && !user) {
  //     return <Redirect to="/home" />;
  //   }
  // };
  // if (loading) return <div />;

  // restrictedPaths(currentUser, path);

  //prevent from displaying Landing, SignIn and Register Page signed in users
  //if signed in user tries to go to Landing Page redirect him to Main Page

  if (!loading) {
    if (path === '/register' && currentUser) {
      return <Redirect to="/" />;
    }
    if (path === '/sign-in' && currentUser) {
      return <Redirect to="/" />;
    }
    if (path === '/sign-in' && !currentUser) {
      return <Route path={path} {...rest} />;
    }
    if (path === '/home' && currentUser) {
      return <Redirect to="/" />;
    }
    if (path === '/' && !currentUser) {
      // return <Redirect to="/home" />;
    }
    return <Route path={path} {...rest} />;
  }

  return <div />;
};
export default PrivateRoute;
