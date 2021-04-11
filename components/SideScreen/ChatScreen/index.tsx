import { SideScreenContainer } from '@components/styledComponents';
import React from 'react';
import Header from './Header';

interface Props {}

const index = (props: Props) => {
	return (
		<SideScreenContainer>
			<Header />
		</SideScreenContainer>
	);
};

export default index;
