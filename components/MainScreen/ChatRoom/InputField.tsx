import { KatalkButton, VARIANT } from '@components/styledComponents';
import { Timestamp } from '@firebase/firestore-types';
import { ChatProps, ScreenContext, UserContext } from '@lib/context';
import { firestore, serverTimestamp } from '@lib/firebase';
import { TextField } from '@material-ui/core';
import React, { FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';

export const InputField = () => {
	const userInfo = useContext(UserContext);
	const [msg, setMsg] = useState('');
	const { selectedElement } = useContext(ScreenContext);
	const { id } = selectedElement as ChatProps;

	const sendMsg = (e: FormEvent) => {
		e.preventDefault();
		const msgRef = firestore.collection('chats').doc(id).collection('messages');
		const userRef = firestore.collection('users').doc(userInfo.id);
		const res = msgRef.add({
			userId: userInfo,
			sent: serverTimestamp() as Timestamp,
			message: msg,
		});
		userRef.set({ lastSeen: serverTimestamp() as Timestamp }, { merge: true });

		if (res) {
			setMsg('');
		}
	};

	return (
		<Container>
			<TextBox
				rowsMax={4}
				value={msg}
				onChange={(e) => setMsg(e.target.value)}
				multiline
				autoFocus
			/>
			<SendBtn
				variant={VARIANT.YELLOW}
				disabled={msg.length < 1}
				onClick={(e) => sendMsg(e)}
				type='submit'
			>
				SEND
			</SendBtn>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	bottom: 0;
	position: fixed;
	height: 6rem;
	background: #f0eef0;
	padding: 1rem;
`;

const TextBox = styled(TextField)`
	flex: 0.4 1 auto;
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;
const SendBtn = styled(KatalkButton)`
	width: 3rem;
	height: 1.5rem;
	margin: 1.5rem;
`;
