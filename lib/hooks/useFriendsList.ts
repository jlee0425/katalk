import firebase from 'firebase/app';
import { UserProps } from '@lib/context';
import { firestore, auth, fetchUserWithID } from '@lib/firebase';
import { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

export const useFriendsList = () => {
	const [friendsSnapshot, loading] = useCollection(
		firestore
			.collection('users')
			.doc(auth.currentUser?.uid)
			.collection('friends'),
	);
	const [friends, setFriends] = useState<firebase.firestore.DocumentData>([]);

	useEffect(() => {
		const fetchFriendList = async () => {
			const friendsIDs = friendsSnapshot!.docs.map((doc) => doc.id);

			const users = await Promise.all(
				friendsIDs.map((id) => fetchUserWithID(id)),
			);
			setFriends(users.filter((u) => u));
		};

		if (friendsSnapshot && !loading) {
			fetchFriendList();
		}
	}, [friendsSnapshot, loading]);

	return friends as UserProps[];
};
