import { SideScreenContainer } from '@components/styledComponents';
import React from 'react';
import styled from 'styled-components';
import { FriendsList } from './FriendsList';
import Header from './Header';

const index = () => {
	return (
		<SideScreenContainer>
			<Header />
			<FriendsList />
		</SideScreenContainer>
	);
};

export default index;
