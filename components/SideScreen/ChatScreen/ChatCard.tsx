import { CardContainer, CardDetail } from '@components/styledComponents';
import { UserAvatar } from '@components/UserAvatar';
import { ChatProps, UserContext } from '@lib/context';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React, { useContext } from 'react';

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
					{chattees.map((chattee, i) => (
						<span key={i}>
							{i < chattees.length - 1
								? chattee.username + ', '
								: chattee.username + ' ' + chattees.length}
						</span>
					))}
				</h4>
				<p>{messages[messages.length - 1]?.message}</p>
			</CardDetail>
			<p>{lastActive.toString()}</p>
		</CardContainer>
	);
};
