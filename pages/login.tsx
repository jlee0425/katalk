import {
	GridCenter,
	KatalkButton,
	Logo,
	LogoContainer,
	VARIANT,
} from '@components/styledComponents';
import { auth, googleAuthProvider } from '@lib/firebase';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

interface Props {
	loading: boolean;
}

const Login = ({ loading }: Props) => {
	const router = useRouter();
	if (auth.currentUser) router.push('/');
	const signInWithGoogle = async () =>
		await auth
			.signInWithPopup(googleAuthProvider)
			.then(() => {
				toast.success('login successful');
				router.push('/');
			})
			.catch(() => toast.error('error occurred'));

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
