import { Center, Logo, LogoContainer } from '@components/styledComponents';
import React from 'react';
import styled from 'styled-components';

interface Props {}

export const DefaultScreen = (props: Props) => {
	return (
		<Center>
			<LogoContainer>
				<Logo src='./logo.png' />
			</LogoContainer>
		</Center>
	);
};
