import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

interface Props {}

export const UserInfo = (props: Props) => {
	return (
		<Container>
			<Avatar>J</Avatar>
			<UserDetails>
				<h4>User Name</h4>
				<p>User ID</p>
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
