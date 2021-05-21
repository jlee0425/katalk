import { Center, Title } from '@components/styledComponents';
import {
	ChatProps,
	ScreenContext,
	SCREENS,
	User,
	UserContext,
	UserProps,
} from '@lib/context';
import { addChatToDB, fetchChatWithChattees } from '@lib/firebase';
import { Avatar, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { format } from 'timeago.js';

export const FriendStatusScreen = () => {
	const { selectedElement, setScreen, setSelectedElement } =
		useContext(ScreenContext);
	const user = selectedElement as UserProps;
	const userInfo = useContext(UserContext);

	const handleClick = async () => {
		if (user != null) {
			const chat = (await fetchChatWithChattees([user, userInfo])) as ChatProps;
			if (chat) {
				setSelectedElement(chat);
			} else {
				addChatToDB([user, userInfo]);
				setScreen(SCREENS.ChatScreen);
			}
		}
	};

	if (user != null) {
		return (
			<Container>
				{user?.photoURL ? (
					<Avatar src={user.photoURL} />
				) : (
					<Avatar>{user?.username[0].toUpperCase()}</Avatar>
				)}
				<Title>{user.username}</Title>
				<Title>{user.email}</Title>
				<p>{format(user.lastSeen?.toDate().toUTCString())}</p>
				{userInfo.email != user?.email && (
					<Button onClick={handleClick}>Start Chat</Button>
				)}
			</Container>
		);
	}
	return null;
};

const Container = styled(Center)`
	flex-direction: column;
	height: 100%;
`;
