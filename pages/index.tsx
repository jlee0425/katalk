import Head from 'next/head';
import React from 'react';
import Sidebar from '@components/Sidebar';
import styled from 'styled-components';

export default function Home() {
	return (
		<div>
			<Head>
				<link rel='icon' href='/logo.png' />
				<title>Katalk Clone</title>
			</Head>
			<Body>
				<Sidebar />
			</Body>
		</div>
	);
}

const Body = styled.div``;
