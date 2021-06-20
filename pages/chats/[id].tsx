import { Header } from '@components/MainScreen/ChatRoom/Header';
import { InputField } from '@components/MainScreen/ChatRoom/InputField';
import { Main } from '@components/MainScreen/ChatRoom/Main';
import { MessageProps, UserProps } from '@lib/context';
import { firestore } from '@lib/firebase';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import styled from 'styled-components';

interface Props {
	messages: MessageProps[];
	chattees: UserProps[];
}
export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	console.log(`context.query`, context.query);
	const ref = firestore.collection('chats').doc('context.query.id');

	const msgRes = await ref.collection('messages').orderBy('sent', 'asc').get();

	const messages = msgRes.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

	const chatRes = await ref.get();
	const chattees = chatRes.data()?.chattees;

	if (!chattees) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			messages: messages,
			chattees: chattees,
		},
	};
};

const ChatScreen = ({ messages, chattees }: Props) => {
	return (
		<Container>
			<Header chattees={chattees} />
			<Main messages={messages} />
			<InputField />
		</Container>
	);
};

export default ChatScreen;

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;
