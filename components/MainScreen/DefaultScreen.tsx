import { Center, Logo, LogoContainer } from '@components/styledComponents';
import React from 'react';
import styled from 'styled-components';

export const DefaultScreen = () => {
	return (
		<Container>
			<LogoContainer>
				<Logo src='./logo.png' />
			</LogoContainer>
		</Container>
	);
};

const Container = styled(Center)`
	width: 60%;
	background-color: beige;
`;
