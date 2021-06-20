import { UserContext } from '@lib/context';
import { useChatList } from '@lib/hooks';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChatCard } from './ChatCard';

interface Props {}

export const ChatList = (props: Props) => {
	const userInfo = useContext(UserContext);
	const chats = useChatList(userInfo);
	return (
		<Container>
			{chats.map((chat, i) => (
				<ChatCard chat={chat} key={i} />
			))}
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
`;
