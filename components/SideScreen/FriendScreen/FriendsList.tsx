import { UserProps } from '@lib/context';
import { useFriendsList } from '@lib/hooks/index';
import React from 'react';
import styled from 'styled-components';
import { UserCard } from './UserCard';

/* TODO
	implement SSR + ISR
 */

export const FriendsList = () => {
	const friends = useFriendsList();

	return (
		<Container>
			{friends.map((friend: UserProps) => (
				<UserCard {...friend} key={friend.email} />
			))}
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
`;
