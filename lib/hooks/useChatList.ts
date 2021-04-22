import { ChatProps, UserProps } from '@lib/context';
import { fetchChatWithID, firestore } from '@lib/firebase';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

export const useChatList = (user: UserProps) => {
	const [chatsSnapshot, loading] = useCollection(
		firestore.collection('chats').where('chattees', 'array-contains', user),
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
