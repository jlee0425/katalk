import Head from 'next/head';
import React, { useState } from 'react';
import Sidebar from '@components/Sidebar';
import styled from 'styled-components';
import FriendScreen from '@components/FriendScreen';

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
			</Body>
		</div>
	);
}

const Body = styled.div`
	display: flex;
	flex-direction: row;
`;
