import { DefaultScreen } from '@components/MainScreen/DefaultScreen';
import ChatList from '@components/SideScreen/ChatList';
import React from 'react';

const index = () => {
	return (
		<>
			<ChatList />
			<DefaultScreen />
		</>
	);
};

export default index;
