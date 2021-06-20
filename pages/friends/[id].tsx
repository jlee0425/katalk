import FriendList from '@components/SideScreen/FriendList';
import { Center, Title } from '@components/styledComponents';
import { UserContext, UserProps } from '@lib/context';
import {
	addChatToDB,
	fetchChatWithChattees,
	fetchUserWithID,
} from '@lib/firebase';
import { Avatar, Button } from '@material-ui/core';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { format } from 'timeago.js';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	console.log('friends ctx params', ctx.params);
	// const user = await fetchUserWithID(ctx.params);

	const user = {};
	if (!user) {
		return {
			notFound: true,
		};
	}
	return {
		props: { user },
	};
};

export const UserPage = ({ user }: { user: UserProps }) => {
	const userInfo = useContext(UserContext);
	const router = useRouter();
	console.log('query', router.query);
	console.log(`router.pathname`, router.pathname);

	const handleClick = async () => {
		if (user != null) {
			const chat = await fetchChatWithChattees([user, userInfo]);
			if (chat) {
				router.push(`/chat/${chat.cid}`);
			} else {
				const chat = await addChatToDB([user, userInfo]);
				router.push(`/chat/${chat?.cid}`);
			}
		}
	};

	if (user != null) {
		return (
			<>
				<FriendList />
				<Container>
					{user?.photoURL ? (
						<Avatar src={user.photoURL} />
					) : (
						<Avatar>{user?.username[0].toUpperCase()}</Avatar>
					)}
					<Title>{user.username}</Title>
					<Title>{user.email}</Title>
					<p>{format(user.lastSeen?.toDate().toUTCString())}</p>
					{userInfo.email != user?.email && (
						<Button onClick={handleClick}>Start Chat</Button>
					)}
				</Container>
			</>
		);
	}
	return null;
};

const Container = styled(Center)`
	flex-direction: column;
	height: 100%;
`;
