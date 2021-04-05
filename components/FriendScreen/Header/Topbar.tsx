import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AddFriendBtn } from './AddFriendBtn';
import { SearchFriendBtn } from './SearchFriendBtn';

interface Props {}

export const Topbar = (props: Props) => {
	const [addModalOpen, setAddModalOpen] = useState(false);

	return (
		<Container>
			<h2>Friends</h2>
			<Icons>
				<AddFriendBtn />
				<SearchFriendBtn />
			</Icons>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const Icons = styled.div`
	display: flex;
	flex-direction: row;
`;
