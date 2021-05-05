import React, {useContext, useState, useEffect} from 'react';
import firebase from 'firebase';
import {auth} from './../firebase';
import {useHistory} from 'react-router-dom';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged((user) => {
    //   setCurrentUser(user);
    //   setLoading(false);
    // });
    // return unsubscribe;

    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(false);
      }
      setLoading(false);
    });
  }, []);

  const history = useHistory();

  async function callRegister(email, password) {
    const register = firebase.functions().httpsCallable('createUserTest');
    console.log(email, password);

    try {
      await register({email, password});
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      return error.message;
    }

    // return auth.createUserWithEmailAndPassword(email, password);
  }

  async function signIn(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      return true;
    }
  }
  // function callTest() {
  //   const callTest = firebase.functions().httpsCallable('test');
  //   callTest('aaa')
  //     .then((result) => {
  //       console.log('It works');
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  const value = {
    loading,
    currentUser,
    signIn,
    callRegister,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  // {!loading && children}
}
