import Head from 'next/head';
import React, { useState } from 'react';
import Sidebar from '@components/Sidebar';
import styled from 'styled-components';
import SideScreen from '@components/SideScreen';
import MainScreen from '@components/MainScreen';
import { ScreenContext, SCREENS } from '@lib/context';

export default function Home() {
	const [screen, setScreen] = useState(SCREENS.FriendScreen);
	const [selectedElement, setSelectedElement] = useState(null);

	return (
		<div>
			<Head>
				<link rel='icon' href='/logo.png' />
				<title>Katalk Clone</title>
			</Head>
			<Body>
				<ScreenContext.Provider
					value={{ screen, setScreen, selectedElement, setSelectedElement }}
				>
					<Sidebar />
					<SideScreen />
					<MainScreen />
				</ScreenContext.Provider>
			</Body>
		</div>
	);
}

const Body = styled.div`
	display: flex;
	flex-direction: row;
`;
