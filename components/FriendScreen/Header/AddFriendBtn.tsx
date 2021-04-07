import {
	Backdrop,
	Button,
	IconButton,
	Modal,
	TextField,
} from '@material-ui/core';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { forwardRef, ReactElement, useContext, useState } from 'react';
import styled from 'styled-components';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {
	Center,
	KatalkButton,
	Paper,
	VARIANT,
} from '@components/styledComponents';
import { auth, firestore, getUserWithEmail } from '@lib/firebase';
import { UserContext } from '@lib/context';

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

export const AddFriendBtn = () => {
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const addFriend = async (email: string): Promise<void> => {
		const friendDocSnapshot = await getUserWithEmail(email);
		const userDoc = firestore.collection('users');

		const currentUserRef = userDoc
			.doc(auth.currentUser!.uid)
			.collection('friends')
			.doc(friendDocSnapshot.id);
		const friendRef = userDoc
			.doc(friendDocSnapshot.id)
			.collection('friends')
			.doc(auth.currentUser!.uid);

		const batch = firestore.batch();

		batch.set(currentUserRef, { status: true });
		batch.set(friendRef, { status: true });

		await batch.commit().then(() => setOpen(false));
	};

	return (
		<>
			<IconButton onClick={handleOpen}>
				<PersonAddIcon />
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
						<Title>Add by Email</Title>
						<Input
							variant='standard'
							label='Email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Center>
							<KatalkButton
								type='submit'
								variant={VARIANT.BROWN}
								onClick={() => addFriend(email)}
							>
								Add
							</KatalkButton>
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
const Submit = styled(Button)``;
