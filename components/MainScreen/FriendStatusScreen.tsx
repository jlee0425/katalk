import { Center, Title } from '@components/styledComponents';
import { ScreenContext, UserContext } from '@lib/context';
import { Avatar, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import styled from 'styled-components';

export const FriendStatusScreen = () => {
	const { selectedElement: user } = useContext(ScreenContext);
	const { email } = useContext(UserContext);

	if (typeof user != null) {
		return (
			<Container>
				{user?.photoURL ? (
					<Avatar src={user.photoURL} />
				) : (
					<Avatar>{user?.username[0].toUpperCase()}</Avatar>
				)}
				<Title>{user?.username}</Title>
				<Title>{user?.email}</Title>
				<p>{user?.lastSeen}</p>
				{email != user?.email && <Button>Start Chat</Button>}
			</Container>
		);
	}
	return null;
};

const Container = styled(Center)`
	flex-direction: column;
`;
