import { CardContainer, CardDetail } from '@components/styledComponents';
import { UserAvatar } from '@components/UserAvatar';
import { ChatProps, UserContext } from '@lib/context';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { Usernames } from './Usernames';

interface Props {
	chat: ChatProps;
}

export const ChatCard = ({ chat }: Props) => {
	const { lastActive, messages } = chat;
	const userInfo = useContext(UserContext);
	const chattees = chat.chattees.filter((c) => c.email != userInfo.email);
	return (
		<CardContainer>
			<AvatarGroup max={2}>
				{chattees.map((chattee) => (
					<UserAvatar user={chattee} key={chattee.email} />
				))}
			</AvatarGroup>
			<CardDetail>
				<h4>
					<Usernames chattees={chattees} />
				</h4>
				<p>{messages[messages.length - 1]?.message}</p>
			</CardDetail>
			<Timestamp>{format(lastActive.toDate().toISOString())}</Timestamp>
		</CardContainer>
	);
};

const Timestamp = styled.p`
	font-size: 0.8rem;
	color: grey;
`;
