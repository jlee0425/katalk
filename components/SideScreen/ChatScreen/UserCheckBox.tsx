import { SelectFriendsContext, UserProps } from '@lib/context';
import { Avatar, FormControlLabel } from '@material-ui/core';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

interface Props {
	user: UserProps;
}

export const UserCheckBox = ({ user }: Props) => {
	const { selected, setSelected } = useContext(SelectFriendsContext);
	return (
		<Container>
			{user.photoURL ? (
				<Avatar src={user.photoURL} />
			) : (
				<Avatar>{user.username![0].toUpperCase()}</Avatar>
			)}
			<FormControlLabel
				label={user.username}
				labelPlacement='start'
				control={
					<Checkbox
						icon={<RadioButtonUncheckedIcon />}
						checkedIcon={<CheckedCircle />}
					/>
				}
				style={{ float: 'right' }}
				onChange={() => {
					setSelected([...selected, user]);
				}}
			/>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid #e6e3e3;

	&:hover {
		background: #eeeeee;
	}
`;

const UserDetails = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10px;
	* {
		margin: 0;
		padding: 0;
	}

	h4 {
		font-weight: 400;
	}
	p {
		font-size: 12px;
	}
`;

const CheckedCircle = styled(CheckCircleIcon)`
	color: ${({ theme }) => theme.colors.kakaoYellow};

	&:hover {
		color: green;
	}
`;
