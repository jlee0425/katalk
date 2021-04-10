import FriendScreen from '@components/SideScreen/FriendScreen';
import { serverTimestamp } from './firebase';
import { createContext, Dispatch, ReactElement, SetStateAction } from 'react';
import firebase from 'firebase/app';

export interface UserProps {
	username: string;
	email: string;
	photoURL: string;
	lastSeen: firebase.firestore.FieldValue;
}

export const defaultUser: UserProps = {
	username: 'username',
	email: 'email@email.com',
	photoURL: '',
	lastSeen: serverTimestamp(),
};

export const UserContext = createContext<UserProps>(defaultUser);

export enum SCREENS {
	FriendScreen,
	ChatScreen,
}

export interface ScreenProps {
	screen: SCREENS;
	setScreen: Dispatch<SetStateAction<SCREENS>>;
}

export const ScreenContext = createContext<ScreenProps>({
	screen: SCREENS.FriendScreen,
	setScreen: () => SCREENS,
});
