import { UserProps } from './context';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore, getUserWithID, userConverter } from './firebase';
import firebase from 'firebase/app';
import { useCollection } from 'react-firebase-hooks/firestore';

export const useUserData = () => {
	const [user, loading] = useAuthState(auth);
	const [userInfo, setUserInfo] = useState<UserProps>();

	useEffect(() => {
		let unsubscribe;
		if (user) {
			(async () => await addUserToDB(user))();
			const ref = firestore.collection('users').doc(user.uid);
			unsubscribe = ref.onSnapshot((doc) => {
				setUserInfo((doc.data() as UserProps) || undefined);
			});
		} else {
			setUserInfo(undefined);
		}

		return unsubscribe;
	}, [user]);

	return { userInfo, loading };
};

const addUserToDB = async (user: firebase.User): Promise<void> => {
	await firestore
		.collection('users')
		.doc(user.uid)
		.set(userConverter(user), { merge: true });
};

export const useFriendList = () => {
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

	return friends as UserProps[];
};
