import { Center, Title } from '@components/styledComponents';
import { ScreenContext } from '@lib/context';
import { Avatar, Button } from '@material-ui/core';
import React, { useContext } from 'react';

export const FriendStatusScreen = () => {
	const { selectedElement: user } = useContext(ScreenContext);

	if (typeof user != null) {
		return (
			<Center>
				{user?.photoURL ? (
					<Avatar src={user.photoURL} />
				) : (
					<Avatar>{user?.username[0].toUpperCase()}</Avatar>
				)}
				<Title>{user?.username}</Title>
				<Title>{user?.email}</Title>
				<p>{user?.lastSeen}</p>
				<Button>Start Chat</Button>
			</Center>
		);
	}
	return null;
};
