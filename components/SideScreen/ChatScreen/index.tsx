import { SideScreenContainer } from '@components/styledComponents';
import React from 'react';
import { ChatList } from './ChatList';
import Header from './Header';

interface Props {}

const index = (props: Props) => {
	return (
		<SideScreenContainer>
			<Header />
			<ChatList />
		</SideScreenContainer>
	);
};

export default index;
