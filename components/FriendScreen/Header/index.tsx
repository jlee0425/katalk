import React, { useContext } from 'react';
import styled from 'styled-components';
import { Topbar } from './Topbar';
import { UserCard } from '../UserCard';
import { auth } from '@lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserContext } from '@lib/context';

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
`;

export default index;
