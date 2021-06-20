import { ChatProps, ScreenContext, UserContext } from '@lib/context';
import { firestore } from '@lib/firebase';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { InputField } from './InputField';
import { Main } from './Main';

// export const getServerSideProps: GetServerSideProps = async (
// 	context: GetServerSidePropsContext,
// ) => {
// 	const ref = firestore.collection('chats').doc(context.query.id);

// 	const msgRes = await ref.collection('messages').orderBy('sent', 'asc').get();

// 	const messages = msgRes.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

// 	const chatRes = await ref.get();
// 	const chattees = chatRes.data()?.chattees;

// 	return {
// 		props: {
// 			messages: JSON.stringify(messages),
// 			chattees: chattees,
// 		},
// 	};
// };
const index = () => {
	const { selectedElement } = useContext(ScreenContext);
	const { chattees, messages } = selectedElement as ChatProps;

	return (
		<Container>
			<Header chattees={chattees} />
			<Main messages={messages} />
			<InputField />
		</Container>
	);
};

export default index;

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;
