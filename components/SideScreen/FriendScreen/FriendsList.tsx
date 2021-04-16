import { UserProps } from '@lib/context';
import { useFriendList } from '@lib/hooks';
import React from 'react';
import styled from 'styled-components';
import { UserCard } from './UserCard';

export const FriendsList = () => {
	const friends = useFriendList();

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
