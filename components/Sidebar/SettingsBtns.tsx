import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import SettingsIcon from '@material-ui/icons/Settings';

interface Props {}

export const SettingsBtns = (props: Props) => {
	/* notification function */
	const notification = true;

	return (
		<Container>
			<IconButton>
				{notification ? <NotificationsActiveIcon /> : <NotificationsOffIcon />}
			</IconButton>
			<IconButton>
				<SettingsIcon />
			</IconButton>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
