import { KatalkButton, VARIANT } from '@components/styledComponents';
import { ScreenContext } from '@lib/context';
import { firestore } from '@lib/firebase';
import { TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

export const InputField = () => {
	const [msg, setMsg] = useState('');
	const sendMsg = async (msg: string) => {
		const chatSnapshot = await firestore.collection('chats').get();
		chatSnapshot.docs;
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
				onClick={() => {
					sendMsg(msg);
					setMsg('');
				}}
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
`;
const SendBtn = styled(KatalkButton)`
	width: 3rem;
	height: 1.5rem;
	margin: 1.5rem;
`;
