import React from 'react';
import styled from 'styled-components';
import { Topbar } from './Topbar';
import { UserInfo } from './UserInfo';

interface Props {}

const index = (props: Props) => {
	return (
		<Container>
			<Topbar />
			<UserInfo />
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
`;

export default index;
