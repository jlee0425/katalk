import { UserCard } from '@components/SideScreen/FriendScreen/UserCard';
import { UserContext, UserProps } from '@lib/context';
import React, { useContext } from 'react';
import styled from 'styled-components';

interface Props {
	chattees: UserProps[];
}

export const Header = ({ chattees }: Props) => {
	if (!chattees) return null;

	const userInfo = useContext(UserContext);
	const names = chattees
		.filter((c) => c.email != userInfo.email)
		.map((c) => c.username);
	return (
		<Container>
			{names.map((name, i) => (
				<Name key={i}>{name}</Name>
			))}
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
	top: 0;
	max-height: 4rem;
	position: sticky;
	background: #f1f1f1;
	padding: 1rem;
`;

const Name = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
`;
