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
					<LoginBtn onClick={signInWithGoogle}>
						<Logo src='/google.png' style={{ margin: 0, paddingRight: 10 }} />
						Sign In with Google
					</LoginBtn>
				)}
			</LogoContainer>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: #f7e600;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 400px;
`;
const Logo = styled.img`
	margin-bottom: 35px;
	height: 80%;
	max-height: 250px;
`;
const LoginBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: whitesmoke;
	background-color: ${({ theme }) => theme.colors.kakaoBrown};
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.colors.kakaoBrown};
	box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.kakaoBrown};
	height: 35px;
	font-weight: 700;
	width: 80%;
`;

const Spinner = styled(CircularProgress)`
	color: ${({ theme }) => theme.colors.kakaoBrown};
`;

export default Login;
