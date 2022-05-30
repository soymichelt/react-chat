import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDryX_plmP2XrrNjk7PqWtGNQEiUvRDeDM",
  authDomain: "soymicheldev-push-notification.firebaseapp.com",
  projectId: "soymicheldev-push-notification",
  storageBucket: "soymicheldev-push-notification.appspot.com",
  messagingSenderId: "845406287014",
  appId: "1:845406287014:web:2e70fd6533d3bd91753067",
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if('serviceWorker' in navigator) {
  console.log("Service Worker Init >>>>> ");
  const messaging = firebase.messaging();
  navigator.serviceWorker.register('firebase-messaging-sw.js')
  .then((register) => {
    messaging.getToken()
      .then((fcmToken) => {
        console.log(fcmToken);

        messaging.onMessage((payload) => {
          console.log("onMessage event fired", payload);
        });

      });
  })
  .catch(error => console.log("Error >>>> ", error));
}