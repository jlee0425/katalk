import { DefaultScreen } from '@components/MainScreen/DefaultScreen';
import FriendList from '@components/SideScreen/FriendList';
import React from 'react';

const index = () => {
	return (
		<>
			<FriendList />
			<DefaultScreen />
		</>
	);
};

export default index;
