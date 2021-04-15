import {
	GridCenter,
	KatalkButton,
	Logo,
	LogoContainer,
	VARIANT,
} from '@components/styledComponents';
import { auth, googleAuthProvider } from '@lib/firebase';
import { CircularProgress } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

interface Props {
	loading: boolean;
}

const Login = ({ loading }: Props) => {
	const signInWithGoogle = async () =>
		await auth.signInWithPopup(googleAuthProvider).catch(console.log);

	return (
		<Container>
			<Head>
				<title>Login</title>
			</Head>
			<LogoContainer>
				<Logo src='/logo.png' />
				{loading ? (
					<Spinner color='inherit' />
				) : (
					<KatalkButton onClick={signInWithGoogle} variant={VARIANT.BROWN}>
						<Logo src='/google.png' style={{ margin: 0, paddingRight: 10 }} />
						Sign In with Google
					</KatalkButton>
				)}
			</LogoContainer>
		</Container>
	);
};

const Container = styled(GridCenter)`
	height: 100vh;
	background-color: #f7e600;
`;

const Spinner = styled(CircularProgress)`
	color: ${({ theme }) => theme.colors.kakaoBrown};
`;

export default Login;
