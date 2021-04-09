import { UserContext, UserProps } from '@lib/context';
import { auth, firestore, getUserWithID } from '@lib/firebase';
import { useUserData } from '@lib/hooks';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	useCollection,
	useDocumentDataOnce,
} from 'react-firebase-hooks/firestore';
import { UserCard } from './UserCard';
import firebase from 'firebase/app';

export const FriendsList = (props: any) => {
	const [friendsSnapshot, loading] = useCollection(
		firestore
			.collection('users')
			.doc(auth.currentUser!.uid)
			.collection('friends'),
	);
	const [friends, setFriends] = useState<firebase.firestore.DocumentData>([]);

	useEffect(() => {
		const fetchFriendList = async () => {
			const friendsIDs = friendsSnapshot!.docs.map((doc) => doc.id);

			const users = await Promise.all(
				friendsIDs.map((id) => getUserWithID(id)),
			);
			setFriends(users);
		};

		if (friendsSnapshot && !loading) {
			fetchFriendList();
		}
	}, [friendsSnapshot, loading]);

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
