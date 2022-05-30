import {
    getMessaging,
    getToken,
    onMessage,
} from 'firebase/messaging';
import { GetInstance } from './firebase.config';

const VAPID_PUBLIC_KEY = '';

const InitMessaging = () => {
    return getMessaging(GetInstance());
};

export const GetToken = async () => {
    const messaging = InitMessaging();
    const token = await getToken(messaging, {
        vapidKey: VAPID_PUBLIC_KEY
    });

    return token;
};

export const OnMessageListener = (messageCallback) => {
    const messaging = InitMessaging();
    onMessage(messaging, (payload) => {
        if(typeof messageCallback === 'function') {
            messageCallback(payload);
        }
    });
};