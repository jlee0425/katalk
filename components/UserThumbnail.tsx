import { ScreenContext, UserProps } from '@lib/context';
import { Avatar, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import styled from 'styled-components';

export const UserThumbnail = (user: UserProps) => {
	const { setSelectedElement } = useContext(ScreenContext);
	const handleClick = () => setSelectedElement(user);

	return (
		<CustomButton onClick={handleClick}>
			{user.photoURL ? (
				<Avatar src={user.photoURL} />
			) : (
				<Avatar>{user.username![0].toUpperCase()}</Avatar>
			)}
		</CustomButton>
	);
};

const CustomButton = styled(Button)`
	width: fit-content;
`;
