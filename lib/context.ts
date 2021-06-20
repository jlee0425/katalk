import { serverTimestamp } from './firebase';
import { createContext, Dispatch, SetStateAction } from 'react';
import { Timestamp } from '@firebase/firestore-types';

export interface UserProps {
	uid: string;
	username: string;
	email: string;
	photoURL: string;
	lastSeen: Timestamp;
}
export var User: UserProps = {
	uid: '',
	username: '',
	email: '',
	photoURL: '',
	lastSeen: serverTimestamp() as Timestamp,
};
export const UserContext = createContext<UserProps>(User);

export interface MessageProps {
	mid: string;
	user: UserProps;
	message: string;
	sent: Timestamp;
}
export interface ChatProps {
	cid: string;
	chattees: UserProps[];
	messages: MessageProps[];
}
