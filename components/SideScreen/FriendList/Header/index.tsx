import { UserContext } from '@lib/context';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserCard } from '../UserCard';
import { Topbar } from './Topbar';

const index = () => {
	const userInfo = useContext(UserContext);
	return (
		<Container>
			<Topbar />
			<UserCard {...userInfo} />
		</Container>
	);
};

const Container = styled.div`
	top: 0;
	height: fit-content;
	position: sticky;
`;

export default index;
