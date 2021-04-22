import firebase from 'firebase/app';
import { createContext, Dispatch, SetStateAction } from 'react';
import { serverTimestamp } from './firebase';
import { format } from 'timeago.js';

export interface UserProps {
	username: string;
	email: string;
	photoURL: string;
	lastSeen: string;
}

export const defaultUser: UserProps = {
	username: 'username',
	email: 'email@email.com',
	photoURL: '',
	lastSeen: format(serverTimestamp().toString()),
};

export const UserContext = createContext<UserProps>(defaultUser);

export enum SCREENS {
	FriendScreen,
	ChatScreen,
}

export interface ScreenProps {
	screen: SCREENS;
	selectedElement: UserProps | null;
	setScreen: Dispatch<SetStateAction<SCREENS>>;
	setSelectedElement: Dispatch<SetStateAction<UserProps | null>>;
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
	sent: string;
}
export interface ChatProps {
	chattees: UserProps[];
	lastActive: string;
	messages: MessageProps[];
}
