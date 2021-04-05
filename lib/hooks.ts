import { UserProps } from './context';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addUserToDB, auth, firestore } from './firebase';

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
