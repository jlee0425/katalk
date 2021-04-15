import { ScreenContext } from '@lib/context';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DefaultScreen } from './DefaultScreen';
import { FriendStatusScreen } from './FriendStatusScreen';

const index = () => {
	const { selectedElement } = useContext(ScreenContext);
	const Screen = selectedElement == null ? DefaultScreen : FriendStatusScreen;

	return (
		<Container>
			<Screen />
		</Container>
	);
};

export default index;

const Container = styled.div`
	width: 60%;
	background-color: beige;
`;
