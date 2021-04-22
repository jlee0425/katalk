import React, { useContext } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { SelectFriendsContext } from '@lib/context';

interface Props {
	username: string;
}

export const Tag = ({ username }: Props) => {
	const { setSelected } = useContext(SelectFriendsContext);

	const handleUncheck = () => {
		setSelected((selected) =>
			selected.filter((user) => user.username != username),
		);
	};

	return (
		<Container>
			<Name>{username}</Name>
			<Button onClick={handleUncheck}>
				<CloseIcon />
			</Button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2px 10px;
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
	&& {
		padding: 0rem;
	}
`;
