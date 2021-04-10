import React, { useContext } from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import ChatButbbleIcon from '@material-ui/icons/ChatBubble';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import { ScreenContext, SCREENS } from '@lib/context';

interface Props {}

export const TopBtns = (props: Props) => {
	const { setScreen } = useContext(ScreenContext);
	return (
		<Container>
			<IconButton onClick={() => setScreen(SCREENS.FriendScreen)}>
				<PersonIcon />
			</IconButton>
			<IconButton onClick={() => setScreen(SCREENS.ChatScreen)}>
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
