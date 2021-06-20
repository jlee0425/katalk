import IconButton from '@material-ui/core/IconButton';
import ChatButbbleIcon from '@material-ui/icons/ChatBubble';
import PersonIcon from '@material-ui/icons/Person';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

export const TopBtns = () => {
	const router = useRouter();

	return (
		<Container>
			<IconButton onClick={() => router.push('/')}>
				<PersonIcon />
			</IconButton>
			<IconButton onClick={() => router.push('/chats')}>
				<ChatButbbleIcon />
			</IconButton>
			{/* <IconButton>
				<MoreHorizIcon />
			</IconButton> */}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
