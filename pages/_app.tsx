import { UserContext, UserProps } from '@lib/context';
import { firestore, serverTimestamp } from '@lib/firebase';
import { useUserData } from '@lib/hooks';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import Login from './login';

function MyApp({ Component, pageProps }: AppProps) {
	const { user, loading } = useUserData();
	const [currentUser, setCurrentUser] = useState<UserProps>();

	useEffect(() => {
		if (user) {
			setCurrentUser({
				username: user.displayName || 'username',
				email: user.email || 'email',
				photoURL: user.photoURL || '',
				lastSeen: serverTimestamp(),
			});
			firestore
				.collection('users')
				.doc(user.uid)
				.set({ ...currentUser }, { merge: true });
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
