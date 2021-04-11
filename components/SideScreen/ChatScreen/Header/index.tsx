import { UserContext } from '@lib/context';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Topbar } from './Topbar';

const index = () => {
	return (
		<Container>
			<Topbar />
		</Container>
	);
};

const Container = styled.div`
	top: 0;
	height: fit-content;
	position: sticky;
`;

export default index;
