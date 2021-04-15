import { Center, Logo, LogoContainer } from '@components/styledComponents';
import React from 'react';
import styled from 'styled-components';

interface Props {}

export const DefaultScreen = (props: Props) => {
	return (
		<Container>
			<LogoContainer>
				<Logo src='./logo.png' />
			</LogoContainer>
		</Container>
	);
};

const Container = styled(Center)`
	height: 100%;
`;
