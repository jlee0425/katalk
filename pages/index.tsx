import Sidebar from '@components/Sidebar';
import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import FriendScreen from './friends';

export default function Home() {
	return (
		<div>
			<Head>
				<link rel='icon' href='/logo.png' />
				<title>Katalk Clone</title>
			</Head>
			<Body>
				<Sidebar />
				<FriendScreen />
				<Toaster position='bottom-center' />
			</Body>
		</div>
	);
}

const Body = styled.div`
	display: flex;
	flex-direction: row;
`;
