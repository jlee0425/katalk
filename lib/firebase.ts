import { UserProps, ChatProps } from '@lib/context';
import firebase from 'firebase/app';
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

export const getUserWithEmail = async (email: string) => {
	const userRef = firestore.collection('users');
	const query = userRef.where('email', '==', email).limit(1);
	const user = (await query.get()).docs[0];

	return user;
};

export const fetchUserWithID = async (
	id: string,
): Promise<UserProps | undefined> => {
	const userRef = await firestore.collection('users').doc(id).get();
	const user = userRef.data();

	return user ? userToJSON(user) : undefined;
};

export const addUserToDB = async (user: firebase.User): Promise<void> => {
	await firestore.collection('users').doc(user.uid).set(
		{
			email: user.email,
			username: user.displayName,
			lastSeen: serverTimestamp(),
			photoURL: user.photoURL,
		},
		{ merge: true },
	);
};

export const addChatToDB = async (
	chattees: UserProps[],
): Promise<ChatProps | null> => {
	const chatRef = await firestore
		.collection('chats')
		.where('chattees', '==', chattees)
		.get();

	if (!chatRef.docs.length) {
		const docRef = await firestore.collection('chats').add({
			chattees: [...chattees],
			messages: [],
		});
		const data = (await docRef.get()).data() as Partial<ChatProps>;
		return { cid: docRef.id, ...data } as ChatProps;
	}

	return null;
};

export const fetchChatWithID = async (
	id: string,
): Promise<firebase.firestore.DocumentData | undefined> => {
	const chatRef = await firestore.collection('chats').doc(id).get();
	const chat = chatRef.data();

	return chat || undefined;
};

export const fetchChatWithChattees = async (
	chattees: UserProps[],
): Promise<ChatProps | null> => {
	const chatRef = await firestore
		.collection('chats')
		.where('chattees', '==', chattees)
		.limit(1)
		.get();

	const chat = chatRef.docs[0]?.data() as ChatProps;

	return chat || null;
};

const userToJSON = (user: firebase.firestore.DocumentData): UserProps => {
	return {
		uid: user.uid,
		username: user.username,
		email: user.email,
		photoURL: user.photoURL,
		lastSeen: user.lastSeen,
	};
};
