import { serverTimestamp } from './firebase';
import { createContext } from 'react';
import firebase from 'firebase/app';

export interface UserProps {
	username: string;
	email: string;
	photoURL: string;
	lastSeen: firebase.firestore.FieldValue;
}

const defaultUser: UserProps = {
	username: 'username',
	email: 'email@email.com',
	photoURL: '',
	lastSeen: serverTimestamp(),
};

export const UserContext = createContext<UserProps>(defaultUser);
