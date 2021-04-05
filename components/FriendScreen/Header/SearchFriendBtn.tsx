import { Backdrop, IconButton, Modal, TextField } from '@material-ui/core';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { forwardRef, ReactElement, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {
	Center,
	KatalkButton,
	Paper,
	VARIANT,
} from '@components/styledComponents';

interface FadeProps {
	children?: ReactElement;
	in: boolean;
	onEnter?: () => void;
	onExited?: () => void;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(
	({ in: open, children, onEnter, onExited, ...other }, ref) => {
		const style = useSpring({
			from: { opacity: 0 },
			to: { opacity: open ? 1 : 0 },
			onStart: () => {
				if (open && onEnter) {
					onEnter();
				}
			},
			onRest: () => {
				if (!open && onExited) {
					onExited();
				}
			},
		});
		return (
			<animated.div ref={ref} style={style} {...other}>
				{children}
			</animated.div>
		);
	},
);

export const SearchFriendBtn = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<IconButton onClick={handleOpen}>
				<SearchIcon />
			</IconButton>
			<CustomModal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{ timeout: 500 }}
			>
				<Fade in={open}>
					<Paper variant={VARIANT.YELLOW}>
						<Title>Search by Email</Title>
						<Input id='standard-basic' label='Email' />
						<Center>
							<KatalkButton variant={VARIANT.BROWN}>Search</KatalkButton>
						</Center>
					</Paper>
				</Fade>
			</CustomModal>
		</>
	);
};
const CustomModal = styled(Modal)`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h4`
	color: ${({ theme }) => theme.colors.kakaoBrown};
`;
const Input = styled(TextField)`
	color: ${({ theme }) => theme.colors.kakaoBrown};
`;
