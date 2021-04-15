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
			<Button>
				<CloseIcon />
			</Button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;
	align-items: center;
	justify-content: space-between;
	width: fit-content;
	border: 1px grey solid;
	border-radius: 2rem;
`;

const Name = styled.p`
	margin: 0;
`;

const Button = styled(IconButton)`
	padding: 0;
`;
