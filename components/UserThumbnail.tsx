import { ScreenContext, UserProps } from '@lib/context';
import { Avatar, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserAvatar } from './UserAvatar';

export const UserThumbnail = (user: UserProps) => {
	const { setSelectedElement } = useContext(ScreenContext);
	const handleClick = () => setSelectedElement(user);

	return (
		<CustomButton onClick={handleClick}>
			<UserAvatar user={user} />
		</CustomButton>
	);
};

const CustomButton = styled(Button)`
	width: fit-content;
`;
