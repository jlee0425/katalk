import { UserContext, UserProps } from '@lib/context';
import { auth, firestore } from '@lib/firebase';
import firebase from 'firebase';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Login from './login';

function MyApp({ Component, pageProps }: AppProps) {
	const [user, loading] = useAuthState(auth);
	const [currentUser, setCurrentUser] = useState<UserProps>();

	useEffect(() => {
		if (user) {
			setCurrentUser({
				username: user.displayName || 'username',
				email: user.email || 'email',
				photoURL: user.photoURL || '',
				lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
			});
			firestore
				.collection('users')
				.doc(user.uid)
				.set({ currentUser }, { merge: true });
		}
	}, [user]);

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{currentUser ? (
					<UserContext.Provider value={currentUser}>
						<Component {...pageProps} />
					</UserContext.Provider>
				) : (
					<Login loading={loading} />
				)}
			</ThemeProvider>
		</>
	);
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}
`;

const theme = {
	colors: {
		kakaoBrown: '#3A1D1D',
		kakaoYellow: '#F7E600',
	},
};
