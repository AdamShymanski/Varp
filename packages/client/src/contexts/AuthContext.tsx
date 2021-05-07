import React, {useContext, useState, useEffect} from 'react';
import firebase from 'firebase/app';
import {auth} from '../firebase';

import {User} from '@firebase/auth-types';
import {useHistory} from 'react-router-dom';

interface FirebaseUser extends firebase.User {
  //
}

interface ContextProps {
  currentUser: FirebaseUser | null;
  loading: boolean;
  signIn: Function;
  callRegister: Function;
  logout: Function;
  resetPassword: Function;
  updateEmail: Function;
  updatePassword: Function;
  fetchUserData: Function;
}

const AuthContext = React.createContext({} as ContextProps);

export function useAuth() {
  return useContext(AuthContext);
}

interface RegisterProps {
  email: string;
  name: string;
  password: string;
  age: number;
  country: string;
}

export const AuthProvider: React.FC = ({children}) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     setCurrentUser(user);
    //   } else {
    //     setCurrentUser(null);
    //   }
    //   setLoading(false);
    // });

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const history = useHistory();

  async function callRegister(data: RegisterProps) {
    const register = firebase.functions().httpsCallable('createUser');
    const {email, password, age, name, country} = data;

    try {
      await register({email, password, age, name, country});
      await auth.signInWithEmailAndPassword(data.email, data.password);
      history.push('/');
    } catch (error) {
      return error.message;
    }

    // return auth.createUserWithEmailAndPassword(email, password);
  }

  async function fetchUserData(uid: string) {
    const fetchUserData = firebase.functions().httpsCallable('fetchUserData');

    try {
      const result = await fetchUserData({uid});
      return result;
    } catch (error) {
      return error.message;
    }

    // return auth.createUserWithEmailAndPassword(email, password);
  }

  async function signIn(email: string, password: string) {
    console.log("SIOGN",signIn)
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

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email: string) {
    if (currentUser) return currentUser.updateEmail(email);
  }

  function updatePassword(password: string) {
    if (currentUser) return currentUser.updatePassword(password);
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        currentUser,
        signIn,
        callRegister,
        fetchUserData,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
