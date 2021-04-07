import { UserProps } from '@lib/context';
import { auth, firestore } from '@lib/firebase';
import { useUserData } from '@lib/hooks';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import styled from 'styled-components';
import { UserCard } from './UserCard';

export const getServerSideProps: GetServerSideProps = async (
	ctx: GetServerSidePropsContext,
) => {
	const friendsQuery = firestore
		.collection('users')
		.doc(auth.currentUser!.uid)
		.collection('friends')
		.where('status', '==', true);

	const friends = (await friendsQuery.get()).docs;
	console.log(`friends`, friends);

	return {
		props: { friends },
	};
};

export const FriendsList = (props: any) => {
	console.log(`props`, props);
	return (
		<Container>
			{/* {friends.map((friend) => (
				<UserCard {...friend} />
			))} */}
		</Container>
	);
};

const Container = styled.div``;
