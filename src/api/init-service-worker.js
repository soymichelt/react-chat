import { GetToken, OnMessageListener } from './messaging';

export const startMessaginSW = () => {
    if(!('serviceWorker' in navigator)) {
        throw new Error('serviceWorker API not support');
    }

    navigator.serviceWorker.register('firebase-messaging-sw.js')
    .then(registration => GetToken())
    .then(token => {
        console.log('Token is >>>> ', token);
        OnMessageListener(payload => {
            console.log('Message received >>>> ', payload);
        });
    })
    .catch(error => console.log('Error >>> ', error));
};