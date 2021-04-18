import { UserProps } from '@lib/context';
import { auth, addUserToDB, firestore } from '@lib/firebase';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

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
