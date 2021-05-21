import { ChatProps, ScreenContext, UserContext } from '@lib/context';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { InputField } from './InputField';
import { Main } from './Main';

const index = () => {
	const { selectedElement } = useContext(ScreenContext);
	const { chattees, messages } = selectedElement as ChatProps;

	return (
		<Container>
			<Header chattees={chattees} />
			<Main messages={messages} />
			<InputField />
		</Container>
	);
};

export default index;

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;
