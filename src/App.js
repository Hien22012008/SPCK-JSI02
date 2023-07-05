import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"
import Store from './Component/Store/Store';
import Register from './Component/Register/Register';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';

function App() {

  const config = {
    apiKey: 'AIzaSyAipy_GKdnFC5wVRbkyUCd4rBxZrD8TIZo',
    authDomain: 'login-firebase-e1d7a.firebaseapp.com	',
    // ...
  };
  firebase.initializeApp(config);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (userLogin) => {
      if (!userLogin) {
        // user logs out, handle something here
        console.log('User is not logged in');
        // setUser(null);
        return;
      }
      console.log('Logged in user: ', userLogin);
      // setUser({ ...user, userName: userLogin.displayName, avt: userLogin.photoURL });
      // notification("success", "Logged in successfully!")
      // const token = await userLogin.getIdToken();
      // console.log('Logged in user token: ', token);
    });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact component={() => <Home />}></Route>
        <Route path='/login' exact component={() => <Login />}></Route>
        <Route path='/store' exact component={() => <Store />}></Route>
       <Route path='/register'exact component={() => <Register />}></Route>
      </div>
    </Router>
    
  );
}

export default App;
