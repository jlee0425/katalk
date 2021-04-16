import React, { MouseEventHandler, useContext } from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import ChatButbbleIcon from '@material-ui/icons/ChatBubble';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import { ScreenContext, SCREENS, SelectFriendsContext } from '@lib/context';

enum BUTTONS {
	FriendsBtn,
	ChatBtn,
}

export const TopBtns = () => {
	const { setScreen, setSelectedElement } = useContext(ScreenContext);

	// todo: type for 'e'
	const handleClick = (e: any) => {
		setSelectedElement(null);
		setScreen(
			e.currentTarget.name == BUTTONS.ChatBtn
				? SCREENS.ChatScreen
				: SCREENS.FriendScreen,
		);
	};

	return (
		<Container>
			<IconButton onClick={handleClick} name={BUTTONS.FriendsBtn.toString()}>
				<PersonIcon />
			</IconButton>
			<IconButton onClick={handleClick} name={BUTTONS.ChatBtn.toString()}>
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
