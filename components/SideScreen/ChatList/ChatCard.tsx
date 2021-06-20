import { CardContainer, CardDetail } from '@components/styledComponents';
import { UserAvatar } from '@components/UserAvatar';
import { ChatProps, UserContext } from '@lib/context';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Usernames } from './Usernames';

interface Props {
	chat: ChatProps;
}

export const ChatCard = ({ chat }: Props) => {
	const router = useRouter();
	const { messages } = chat;
	const userInfo = useContext(UserContext);
	const chattees = chat.chattees.filter((c) => c.email != userInfo.email);

	const handleCardClick = () => router.push(`/chat/${chat.cid}`);

	return (
		<CardContainer onClick={handleCardClick}>
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
		</CardContainer>
	);
};
