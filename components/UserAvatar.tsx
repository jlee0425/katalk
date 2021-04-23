import { UserProps } from '@lib/context';
import { Avatar } from '@material-ui/core';
import React from 'react';

interface Props {
	user: UserProps;
}

export const UserAvatar = ({ user }: Props) => {
	return user.photoURL ? (
		<Avatar src={user.photoURL} />
	) : (
		<Avatar>{user.username![0].toUpperCase()}</Avatar>
	);
};
