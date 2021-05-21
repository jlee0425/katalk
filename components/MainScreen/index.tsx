import { ScreenContext, SCREENS } from '@lib/context';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatRoom from './ChatRoom';
import { DefaultScreen } from './DefaultScreen';
import { FriendStatusScreen } from './FriendStatusScreen';

const index = () => {
	const { screen, selectedElement } = useContext(ScreenContext);
	const [Screen, setScreen] = useState(<DefaultScreen />);

	useEffect(() => {
		if (selectedElement) {
			if (screen == SCREENS.FriendScreen) {
				setScreen(<FriendStatusScreen />);
			} else {
				setScreen(<ChatRoom />);
			}
		} else {
			setScreen(<DefaultScreen />);
		}
	}, [screen, selectedElement]);

	return <Container>{Screen}</Container>;
};

export default index;

const Container = styled.div`
	width: 60%;
	background-color: beige;
`;
