import React from 'react';
import styled from 'styled-components';
import Header from './Header';

interface Props {}

const index = (props: Props) => {
	return (
		<Container>
			<Header />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
	padding: 0 15px;
	background: #ffffff;
`;

export default index;
