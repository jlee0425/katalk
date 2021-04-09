import { UserProps } from '@lib/context';
import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const UserCard = ({ username, email, photoURL }: Partial<UserProps>) => {
	return (
		<Container>
			{photoURL ? (
				<Avatar src={photoURL} />
			) : (
				<Avatar>{username![0].toUpperCase()}</Avatar>
			)}
			<UserDetails>
				<h4>{username}</h4>
				<p>{email}</p>
			</UserDetails>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #e6e3e3;
	padding: 1rem 1rem;

	&:hover {
		background: #eeeeee;
	}
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
