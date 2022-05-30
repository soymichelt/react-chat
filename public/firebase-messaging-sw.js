importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging-compat.js');

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
// import { getMessaging } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging.js';
// import { onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging-sw.js';

console.log("Self >>>> ", self);

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDryX_plmP2XrrNjk7PqWtGNQEiUvRDeDM",
    authDomain: "soymicheldev-push-notification.firebaseapp.com",
    projectId: "soymicheldev-push-notification",
    storageBucket: "soymicheldev-push-notification.appspot.com",
    messagingSenderId: "845406287014",
    appId: "1:845406287014:web:2e70fd6533d3bd91753067",
});

const messaging = firebaseApp.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {body: payload.notification.body,};
  return self.registration.showNotification(notificationTitle,notificationOptions);
});

self.addEventListener('notificationclick', event => {
    console.log(event);
});