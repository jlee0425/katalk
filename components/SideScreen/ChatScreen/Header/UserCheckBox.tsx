import { SelectFriendsContext, UserProps } from '@lib/context';
import { Avatar, FormControlLabel } from '@material-ui/core';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const UserCheckBox = ({ user }: { user: UserProps }) => {
	const { photoURL, username } = user;
	const { selected, setSelected } = useContext(SelectFriendsContext);
	const [checked, setChecked] = useState(false);

	const handleCheck = () => {
		const newList = checked
			? selected.filter((u) => u != user)
			: [...selected, user];

		setSelected(newList);
		setChecked(!checked);
	};

	useEffect(() => {
		// TODO: `checked` is not reflected in circle icon.
		setChecked(selected.indexOf(user) == -1 ? false : true);
	}, [selected]);

	useEffect(() => {
		console.log(`selected.indexOf(user)`, selected.indexOf(user));
		console.log(`checked`, checked);
	}, [selected, checked]);
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
				value={checked}
				control={
					<Checkbox
						name='checked'
						icon={<RadioButtonUncheckedIcon />}
						checkedIcon={<CheckedCircle />}
					/>
				}
				style={{ float: 'right' }}
				onChange={handleCheck}
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

const CheckedCircle = styled(CheckCircleIcon)`
	color: ${({ theme }) => theme.colors.kakaoYellow};

	&& {
		&:hover {
			color: green;
		}
	}
`;
