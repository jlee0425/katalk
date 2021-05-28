import { UserCard } from '@components/SideScreen/FriendScreen/UserCard';
import { UserContext, UserProps } from '@lib/context';
import { IconButton } from '@material-ui/core';
import { AttachFile, MoreVert } from '@material-ui/icons';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Chattees } from './Chattees';

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
			<HeaderInfo>
				<Chattees names={names} />
				<p>Last Active ...</p>
			</HeaderInfo>
			<HeaderIcons>
				<IconButton>
					<AttachFile />
				</IconButton>
				<IconButton>
					<MoreVert />
				</IconButton>
			</HeaderIcons>
		</Container>
	);
};

const Container = styled.div`
	top: 0;
	max-height: 4rem;
	position: sticky;
	background: #f1f1f1;
	padding: 1rem;
`;
const HeaderInfo = styled.div`
	flex: 1;
	margin-left: 1rem;

	> p {
		font-size: 0.8rem;
		color: grey;
	}
`;

const HeaderIcons = styled.div``;
