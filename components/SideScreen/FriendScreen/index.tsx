import React from 'react';
import styled from 'styled-components';
import { FriendsList } from './FriendsList';
import Header from './Header';

interface Props {}

const index = (props: Props) => {
	return (
		<Container>
			<Header />
			<FriendsList />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
	background: #ffffff;
`;

export default index;
