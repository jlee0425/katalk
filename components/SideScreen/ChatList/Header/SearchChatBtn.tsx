import { IconButton } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

interface Props {}

export const SearchChatBtn = (props: Props) => {
	return (
		<IconButton>
			<SearchIcon />
		</IconButton>
	);
};
