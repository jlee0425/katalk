import {
	ChatProps,
	MessageProps,
	ScreenContext,
	UserContext,
} from '@lib/context';
import { firestore } from '@lib/firebase';
import React, { useContext } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { ChatBubble } from './ChatBubble';

export const Main = ({ messages }: { messages: MessageProps[] }) => {
	const userInfo = useContext(UserContext);
	const { selectedElement } = useContext(ScreenContext);
	const { id } = selectedElement as ChatProps;

	const [msgSnapshot] = useCollection(
		firestore
			.collection('chats')
			.doc(id)
			.collection('messages')
			.orderBy('sent', 'asc'),
	);

	const showMsg = () => {
		if (msgSnapshot) {
			return msgSnapshot.docs.map((msg) => (
				<ChatBubble
					key={msg.id}
					user={msg.data().user}
					message={{ ...(msg.data() as MessageProps) }}
				/>
			));
		}
	};
	return <Container>{showMsg()}</Container>;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	background: green;
`;

const EndOfMsg = styled.div``;
