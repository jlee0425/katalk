import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from '@lib/firebase';
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
			<IconButton onClick={() => auth.signOut()}>
				<ExitToAppIcon />
			</IconButton>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
