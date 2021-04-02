import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import ChatButbbleIcon from '@material-ui/icons/ChatBubble';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';

interface Props {}

export const TopBtns = (props: Props) => {
	return (
		<Container>
			<IconButton>
				<PersonIcon />
			</IconButton>
			<IconButton>
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
