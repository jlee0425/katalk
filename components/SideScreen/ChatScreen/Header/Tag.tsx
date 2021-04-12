import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

interface Props {
	username: string;
}

export const Tag = ({ username }: Props) => {
	return (
		<Container>
			<Name>{username}</Name>
			<IconButton>
				<CloseIcon />
			</IconButton>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 1px grey solid;
	border-radius: 5px;
`;

const Name = styled.p``;
