import { ScreenContext, SCREENS, User, UserProps } from '@lib/context';
import React, { useContext } from 'react';
import styled from 'styled-components';
import ChatRoom from './ChatRoom';
import { DefaultScreen } from './DefaultScreen';
import { FriendStatusScreen } from './FriendStatusScreen';

const index = () => {
	const { screen, selectedElement } = useContext(ScreenContext);

	const Screen =
		selectedElement == null
			? DefaultScreen
			: screen == SCREENS.FriendScreen
			? FriendStatusScreen
			: ChatRoom;

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
