import { CardContainer, CardDetail } from '@components/styledComponents';
import { UserThumbnail } from '@components/UserThumbnail';
import { UserProps } from '@lib/context';
import React from 'react';

export const UserCard = (user: UserProps) => {
	return (
		<CardContainer>
			<UserThumbnail {...user} />
			<CardDetail>
				<h4>{user.username}</h4>
				<p>{user.email}</p>
			</CardDetail>
		</CardContainer>
	);
};
