import { UserProps } from '@lib/context';
import { Avatar, FormControlLabel } from '@material-ui/core';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import React, { useState } from 'react';
import styled from 'styled-components';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const UserCheckBox = ({ username, photoURL }: Partial<UserProps>) => {
	const [checked, setChecked] = useState(false);
	return (
		<Container>
			{photoURL ? (
				<Avatar src={photoURL} />
			) : (
				<Avatar>{username![0].toUpperCase()}</Avatar>
			)}
			<FormControlLabel
				label={username}
				labelPlacement='start'
				control={
					<Checkbox
						icon={<RadioButtonUncheckedIcon />}
						checkedIcon={<CheckedCircle />}
					/>
				}
				style={{ float: 'right' }}
				value={checked}
				onChange={() => {
					setChecked(!checked);
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
