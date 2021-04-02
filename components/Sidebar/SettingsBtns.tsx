import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import SettingsIcon from '@material-ui/icons/Settings';

interface Props {}

export const SettingsBtns = (props: Props) => {
	/* notification function */
	const [notification, setNotification] = useState(true);
	const toggleNotifications = () => setNotification(!notification);

	return (
		<Container>
			<IconButton onClick={toggleNotifications}>
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
