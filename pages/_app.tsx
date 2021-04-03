import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@lib/firebase';
import { UserContext } from '@lib/context';

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

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
