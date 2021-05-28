import { serverTimestamp } from './firebase';
import { createContext, Dispatch, SetStateAction } from 'react';
import { Timestamp } from '@firebase/firestore-types';

export interface UserProps {
	id: string;
	username: string;
	email: string;
	photoURL: string;
	lastSeen: Timestamp;
}
export var User: UserProps = {
	id: '',
	username: '',
	email: '',
	photoURL: '',
	lastSeen: serverTimestamp() as Timestamp,
};
export const UserContext = createContext<UserProps>(User);

export enum SCREENS {
	FriendScreen,
	ChatScreen,
}

export interface ScreenProps {
	screen: SCREENS;
	setScreen: Dispatch<SetStateAction<SCREENS>>;
	selectedElement: UserProps | ChatProps | null;
	setSelectedElement: Dispatch<SetStateAction<UserProps | ChatProps | null>>;
}

export const ScreenContext = createContext<ScreenProps>({
	screen: SCREENS.FriendScreen,
	selectedElement: null,
	setScreen: () => SCREENS,
	setSelectedElement: () => {},
});

export interface SelectFriendsProps {
	selected: UserProps[];
	setSelected: Dispatch<SetStateAction<UserProps[]>>;
}

export const SelectFriendsContext = createContext<SelectFriendsProps>({
	selected: [],
	setSelected: () => {},
});

export interface MessageProps {
	user: UserProps;
	message: string;
	sent: Timestamp;
}
export interface ChatProps {
	id: string;
	chattees: UserProps[];
	messages: MessageProps[];
}
