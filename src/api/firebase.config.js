import { initializeApp } from 'firebase/app';

let instance = null;

export const GetInstance = () => {
    if(instance) return instance;

    instance = initializeApp({
        apiKey: "AIzaSyDryX_plmP2XrrNjk7PqWtGNQEiUvRDeDM",
        authDomain: "soymicheldev-push-notification.firebaseapp.com",
        projectId: "soymicheldev-push-notification",
        storageBucket: "soymicheldev-push-notification.appspot.com",
        messagingSenderId: "845406287014",
        appId: "1:845406287014:web:2e70fd6533d3bd91753067",
    });

    return instance;
};