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
import { Button, Radio, Form, Input, message, Col, notification } from 'antd';
import User from './Component/User/User';
import About from './Component/About';
import Detail from './Component/Detail/Detail';
import Checkpoint2 from './Component/Checkpoint2/Checkpoint2';
import Library from './Component/Library/Library';


function App() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    avt: '',
    uid: ''
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [api, contextHolderNotification] = notification.useNotification();

  const config = {
    apiKey: 'AIzaSyAipy_GKdnFC5wVRbkyUCd4rBxZrD8TIZo',
    authDomain: 'login-firebase-e1d7a.firebaseapp.com',
    // ...
  };
  firebase.initializeApp(config);

  const notificationLogin = (type, message) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };


  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (userLogin) => {
      if (!userLogin) {
        // user logs out, handle something here
        console.log('User is not logged in');
        setUser(null);
        return;
      }
      console.log('Logged in user: ', userLogin);
      setUser({ ...user, userName: userLogin.displayName, avt: userLogin.photoURL, email: userLogin.email, uid: userLogin.uid });
      localStorage.setItem('user', JSON.stringify(userLogin))
    });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <Router>
      <div className="App">
        
        {contextHolder}

        {contextHolderNotification}

        <Header notificationLogin={notificationLogin} user={user} />

        <Route path='/' exact component={() => <Home />}></Route>
        <Route path='/login' exact component={() => <Login notificationLogin={notificationLogin} />}></Route>

        <Route path='/store' exact component={() => <Store openNotificationWithIcon={openNotificationWithIcon} user={user} />}></Route>

        <Route path='/register' exact component={() => <Register notificationLogin={notificationLogin} />}></Route>

        <Route path='/information-user' exact component={() => <User user={user}  notificationLogin={notificationLogin} />}></Route>

        <Route path='/about' exact component={() => <About notificationLogin={notificationLogin} />}></Route>

        <Route path='/game/:id' exact component={(match) =>  <Detail match={match} openNotificationWithIcon={openNotificationWithIcon} user={user}/>}  ></Route>

        <Route path='/checkpoint' exact component={() =>  <Checkpoint2 />}></Route>

        <Route path='/library' exact component={() => <Library user={user} />}></Route>

      </div>
    </Router>
  );
}

export default App;