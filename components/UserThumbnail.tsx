import { UserProps } from '@lib/context';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { UserAvatar } from './UserAvatar';

export const UserThumbnail = (user: UserProps) => {
	const router = useRouter();
	const handleClick = () => router.push(`/${user.uid}`);
	console.log(`user`, user);
	return (
		<CustomButton onClick={handleClick}>
			<UserAvatar user={user} />
		</CustomButton>
	);
};

const CustomButton = styled(Button)`
	width: fit-content;
`;
