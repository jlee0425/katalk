import React from 'react';
import styled from 'styled-components';
import { AddChatBtn } from './AddChatBtn';
import { SearchChatBtn } from './SearchChatBtn';

interface Props {}

export const Topbar = (props: Props) => {
	return (
		<Container>
			<h2>Chats</h2>
			<Icons>
				<SearchChatBtn />
				<AddChatBtn />
			</Icons>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
`;
const Icons = styled.div`
	display: flex;
	flex-direction: row;
`;
