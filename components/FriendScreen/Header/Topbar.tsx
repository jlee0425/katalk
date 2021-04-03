import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';

interface Props {}

export const Topbar = (props: Props) => {
	return (
		<Container>
			<h2>Friends</h2>
			<Icons>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<IconButton>
					<PersonAddIcon />
				</IconButton>
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
const Icons = styled.div``;
