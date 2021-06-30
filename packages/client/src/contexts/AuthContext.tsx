import React, {useContext, useState, useEffect} from 'react';
import firebase from 'firebase/app';

import {auth} from '../firebase';
import {db} from '../firebase';

import {User} from '@firebase/auth-types';
import {useHistory} from 'react-router-dom';

import {useLocalStorage} from '@rehooks/local-storage';
import {writeStorage} from '@rehooks/local-storage';
import {idText} from 'typescript';

interface FirebaseUser extends firebase.User {
  //
}

interface ContextProps {
  currentUser: FirebaseUser | null;
  userData: any;
  globalData: any;
  loading: boolean;
  signIn: Function;
  callRegister: Function;
  logout: Function;
  reauthenticate: Function;
  resetPassword: Function;
  changeEmail: Function;
  changePassword: Function;
  deleteAccount: Function;
  updateProfile: Function;
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
  const [userData, setUserData] = useState<{} | null>(null);
  const [globalData, setGlobalData] = useState<{} | null>(null);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const [path] = useLocalStorage<string>('path');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      history.push('/loading');
      setCurrentUser(user);
      if (user) {
        await fetchGolablData();
        await fetchUserData(user.uid);
      }
      setLoading(false);
    });

    if (path) {
      if (currentUser && !(path === '/' || '/settings' || '/support')) {
        history.push('/');
      }
      if (!currentUser && !(path !== '/' || '/settings' || '/support'))
        history.push(path);
    }

    return unsubscribe;
  }, []);

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
  }

  async function fetchUserData(uid: string) {
    try {
      db.collection('users')
        .doc(uid)
        .onSnapshot((doc) => {
          setUserData(doc.data()!);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function updateProfile(prop: any) {
    try {
      const userDoc = db.collection('users').doc(currentUser?.uid);
      let updateObject = {};

      for (const [key, value] of Object.entries(prop)) {
        if (value !== '' && key !== 'email') {
          updateObject[key] = value;
        }
      }

      await userDoc.update(updateObject);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  async function fetchGolablData() {
    try {
      db.collection('global')
        .doc('jackpot')
        .onSnapshot((doc) => {
          setGlobalData(doc.data()!);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      return true;
    }
  }

  function logout() {
    auth.signOut();
  }

  async function resetPassword(email: string) {
    try {
      await auth.sendPasswordResetEmail(currentUser?.email!);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function changeEmail(email: string) {
    try {
      if (currentUser) await currentUser.updateEmail(email);
      return true;
    } catch (error) {
      console.log(error.message);
    }
  }
  async function reauthenticate(password: string) {
    try {
      if (currentUser) {
        const credential = firebase.auth.EmailAuthProvider.credential(
          currentUser.email!,
          password,
        );
        await currentUser.reauthenticateWithCredential(credential);
        return true;
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  async function changePassword(password: string) {
    try {
      if (currentUser) await currentUser.updatePassword(password);
    } catch (error) {
      console.log(error.message);
      throw error.message;
    }
  }

  async function deleteAccount() {
    try {
      if (currentUser) {
        writeStorage('path', '/home');
        await db.collection('users').doc(currentUser.uid).delete();
        await currentUser.delete();
        logout();
        history.push('/home');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        userData,
        currentUser,
        globalData,
        signIn,
        logout,
        changeEmail,
        callRegister,
        resetPassword,
        deleteAccount,
        updateProfile,
        changePassword,
        reauthenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
