import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

interface Props {
	username: string;
	email: string;
	photoURL: string;
}

export const UserCard = ({ username, email, photoURL }: Props) => {
	return (
		<Container>
			{photoURL ? (
				<Avatar src={photoURL} />
			) : (
				<Avatar>{username[0].toUpperCase()}</Avatar>
			)}
			<UserDetails>
				<h4>{username || 'Username'}</h4>
				<p>{email || 'Email'}</p>
			</UserDetails>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const UserDetails = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10px;
	* {
		margin: 0;
		padding: 0;
	}

	h4 {
		font-weight: 500;
	}
	p {
		font-size: 12px;
	}
`;
