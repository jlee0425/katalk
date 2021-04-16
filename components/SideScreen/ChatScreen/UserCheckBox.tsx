import { SelectFriendsContext, UserProps } from '@lib/context';
import { Avatar, FormControlLabel } from '@material-ui/core';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const UserCheckBox = ({ user }: { user: UserProps }) => {
	const { photoURL, username } = user;
	const { selected, setSelected } = useContext(SelectFriendsContext);
	const [checked, setChecked] = useState(false);

	const handleCheck = () => {
		const newList = checked
			? selected.filter(({ email }) => email != user.email)
			: [...selected, user];

		setSelected(newList);
		setChecked(!checked);
	};

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
				onChange={() => handleCheck()}
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
