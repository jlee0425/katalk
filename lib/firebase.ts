import { defaultUser } from './context';
import { UserProps } from '@lib/context';
import firebase from 'firebase/app';
import { format } from 'timeago.js';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDeWJwXDYny0B2tA0E4eu5wdbVRuc6cGiQ',
	authDomain: 'katalk-eb3c9.firebaseapp.com',
	projectId: 'katalk-eb3c9',
	storageBucket: 'katalk-eb3c9.appspot.com',
	messagingSenderId: '944172050682',
	appId: '1:944172050682:web:8eca4685af8e8c6b48c143',
	measurementId: 'G-NZNC6PPBWC',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

export const auth = app.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = app.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const userConverter = (user: firebase.User) => {
	return {
		username: user.displayName || defaultUser.username,
		email: user.email || defaultUser.email,
		photoURL: user.photoURL || defaultUser.photoURL,
		lastSeen: user.metadata.lastSignInTime,
	};
};

export const getUserWithEmail = async (email: string) => {
	const userRef = firestore.collection('users');
	const query = userRef.where('email', '==', email).limit(1);
	const user = (await query.get()).docs[0];

	return userToJSON(user);
};

export const getUserWithID = async (
	id: string,
): Promise<firebase.firestore.DocumentData | undefined> => {
	const userRef = await firestore.collection('users').doc(id).get();
	const user = userRef.data();

	return user ? userToJSON(user) : undefined;
};

const userToJSON = (user: firebase.firestore.DocumentData) => {
	return {
		username: user.username,
		email: user.email,
		photoURL: user.photoURL,
		lastSeen: format(user.lastSeen),
	};
};
