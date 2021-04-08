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
	const [friends, setFriends] = useState<UserProps>();

	useEffect(() => {
		const fetchFriendList = async () => {
			const friendsIDs = friendsSnapshot!.docs.map((doc) => doc.id);
			const res = friendsIDs.map(async (id) => {
				const user = await getUserWithID(id);
				return user;
			});
			console.log(`res`, res);
			setFriends(res);
		};

		if (friendsSnapshot && !loading) {
			fetchFriendList();
		}
	}, [friendsSnapshot, loading]);

	return (
		<Container>
			{/* {friends.map((friend) => (
				<UserCard {...friend} />
			))} */}
		</Container>
	);
};

const Container = styled.div``;
