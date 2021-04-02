import React from 'react';
import styled from 'styled-components';
import { TopBtns } from './TopBtns';
import { SettingsBtns } from './SettingsBtns';

interface Props {}

const index = (props: Props) => {
	return (
		<Container>
			<TopBtns />
			<SettingsBtns />
		</Container>
	);
};

export default index;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	height: 100vh;
	max-width: 60px;
	padding: 15px 0;
	justify-content: space-between;
	background: #dadada;
`;
