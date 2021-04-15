import React from 'react';
import styled from 'styled-components';
import { DefaultScreen } from './DefaultScreen';

const index = () => {
	return (
		<Container>
			<DefaultScreen />
		</Container>
	);
};

export default index;

const Container = styled.div`
	width: 60%;
	background-color: beige;
`;
