import { UserContext } from '@lib/context';
import { useUserData } from '@lib/hooks';
import { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import Login from './login';

function MyApp({ Component, pageProps }: AppProps) {
	const { userInfo, loading } = useUserData();

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{userInfo && !loading ? (
					<UserContext.Provider value={userInfo}>
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
