import { onBackgroundMessage } from 'firebase/messaging/sw';
import { getMessaging, getToken } from 'firebase/messaging';
import { GetInstance } from './firebase.config';

export const RegisterCloudMessaging = () => {
    if(!Notification) {
        throw new Error('Not support push notification');
    }

    const messaging = getMessaging(GetInstance());

    GetVapidToken(messaging).then(token => console.log("Token >>>> ", token)).catch(error => "Token Error >>>> ", error);

    onBackgroundMessage(messaging, (payload) => {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        console.log("Firebase Messaging >>>> ", payload);

        CreateNotification('Testing title', { body: 'Testing body', });
    });
};

export const RequirePermissions = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            // TODO(developer): Retrieve a registration token for use with FCM.
            // ...
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
};

const CreateNotification = (title, options) => {
    const notification = new Notification(title, options);
    setTimeout(() => {
        notification.close();
    }, 5000);
};

const VAPID_PUBLIC_KEY = `BCYR6eqQ4YqBY83ZD_sIgC-iAbcok3meVX0U3peR1wIzz7jvzEZwYCb9CuEy9Jdbr4cj6teNFftVuRfy7qAPR4g`;

const GetVapidToken = (messaging) => {
    const tokenPromise = new Promise((resolve, reject) => {
        getToken(messaging, { vapidKey: VAPID_PUBLIC_KEY })
        .then((currentToken) => {
            if (currentToken) {
                // Send the token to your server and update the UI if necessary
                resolve(currentToken);
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');

                reject(new Error('No registration token available. Request permission to generate one.'));
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            reject(err);
        });
    });

    return tokenPromise;
};