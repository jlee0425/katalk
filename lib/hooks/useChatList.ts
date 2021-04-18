import firebase from 'firebase/app';
import { ChatProps } from '@lib/context';
import { firestore, auth, fetchChatWithID } from '@lib/firebase';
import { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

export const useChatList = () => {
	const [chatsSnapshot, loading] = useCollection(
		firestore
			.collection('chats')
			.where('chattees', 'array-contains', auth.currentUser!.uid),
	);
	const [chats, setChats] = useState<firebase.firestore.DocumentData>([]);

	useEffect(() => {
		const fetchChatList = async () => {
			const chatsIDs = chatsSnapshot!.docs.map((doc) => doc.id);
			const talks = await Promise.all(
				chatsIDs.map((id) => fetchChatWithID(id)),
			);
			setChats(talks);
		};
		if (chatsSnapshot && !loading) {
			fetchChatList();
		}
	}, [chatsSnapshot, loading]);

	return chats as ChatProps[];
};
