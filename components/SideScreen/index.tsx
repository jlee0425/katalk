import { ScreenContext, SCREENS } from '@lib/context';
import React, { useContext, useState } from 'react';
import ChatScreen from './ChatScreen';
import FriendScreen from './FriendScreen';

interface Props {}

const index = (props: Props) => {
	const { screen } = useContext(ScreenContext);

	return screen == SCREENS.FriendScreen ? <FriendScreen /> : <ChatScreen />;
};

export default index;
