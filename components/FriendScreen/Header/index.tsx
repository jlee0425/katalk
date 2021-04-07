import { UserContext } from '@lib/context';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserCard } from '../UserCard';
import { Topbar } from './Topbar';

const index = () => {
	const { username, email, photoURL } = useContext(UserContext);
	return (
		<Container>
			<Topbar />
			<UserCard username={username} email={email} photoURL={photoURL} />
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
	position: sticky;
`;

export default index;
