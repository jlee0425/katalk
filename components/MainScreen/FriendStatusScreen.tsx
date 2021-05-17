import { Center, Title } from '@components/styledComponents';
import { ScreenContext, User, UserContext, UserProps } from '@lib/context';
import { addChatToDB } from '@lib/firebase';
import { Avatar, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { format } from 'timeago.js';

export const FriendStatusScreen = () => {
	const { selectedElement } = useContext(ScreenContext);
	const user = selectedElement as UserProps;
	const userInfo = useContext(UserContext);

	const addChat = () => {
		if (user != null) addChatToDB([user, userInfo]);
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
					<Button onClick={addChat}>Start Chat</Button>
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
