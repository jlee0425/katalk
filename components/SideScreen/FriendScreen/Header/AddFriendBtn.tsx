import {
	Center,
	CustomModal,
	KatalkButton,
	Paper,
	VARIANT,
	Input,
	Title,
} from '@components/styledComponents';
import { auth, firestore, getUserWithEmail } from '@lib/firebase';
import { Backdrop, Button, IconButton, TextField } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { forwardRef, ReactElement, useState } from 'react';
import styled from 'styled-components';

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

const Submit = styled(Button)``;
