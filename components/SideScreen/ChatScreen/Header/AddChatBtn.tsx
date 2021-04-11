import {
	VARIANT,
	Center,
	KatalkButton,
	Paper,
	CustomModal,
	Title,
} from '@components/styledComponents';
import { getUserWithEmail, firestore, auth } from '@lib/firebase';
import { useFriendList } from '@lib/hooks';
import { Backdrop, Button, IconButton, Input } from '@material-ui/core';
import AddCommentIcon from '@material-ui/icons/AddComment';
import React, { forwardRef, ReactElement, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

interface Props {}

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

export const AddChatBtn = (props: Props) => {
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');
	const [selected, setSelected] = useState([]);
	const friends = useFriendList();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const addChat = async (email: string): Promise<void> => {
		// Todo
	};

	return (
		<>
			<IconButton onClick={handleOpen}>
				<AddCommentIcon />
			</IconButton>
			<CustomModal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{ timeout: 500 }}
			>
				<Fade in={open}>
					<TempPaper>
						<Title>
							Choose Participants {!!selected.length && selected.length}
						</Title>
						<Input
							type='search'
							startAdornment={<SearchIcon height='2px' />}
							placeholder='Search Name'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Center>
							<Button
								type='submit'
								onClick={() => {}}
								disabled={!selected.length}
							>
								Confirm
							</Button>
						</Center>
					</TempPaper>
				</Fade>
			</CustomModal>
		</>
	);
};

const TempPaper = styled.div`
	padding: 25px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.kakaoYellow};
	border: 1px solid ${({ theme }) => theme.colors.kakaoYellow};
	box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.kakaoYellow};
	height: 30rem;
	width: 20rem;
	max-height: 100%;
`;
