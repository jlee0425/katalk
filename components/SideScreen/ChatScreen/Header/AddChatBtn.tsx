import { Center, CustomModal, Title } from '@components/styledComponents';
import { SelectFriendsContext, UserContext, UserProps } from '@lib/context';
import { useFriendsList } from '@lib/hooks/index';
import { Backdrop, Button, IconButton, Input } from '@material-ui/core';
import AddCommentIcon from '@material-ui/icons/AddComment';
import SearchIcon from '@material-ui/icons/Search';
import React, {
	forwardRef,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { UserCheckBox } from './UserCheckBox';
import { SelectedTags } from './SelectedTags';
import { addChatToDB } from '@lib/firebase';

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
	const userInfo = useContext(UserContext);
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<UserProps[]>([]);
	const friends = useFriendsList();
	const [listedFriends, setListedFriends] = useState<UserProps[]>([]);

	useEffect(() => {
		setListedFriends(friends);
	}, []);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setSelected([]);
	};

	const addChat = () => {
		addChatToDB([...selected, userInfo]);
		setOpen(false);
	};

	const handleInputChange = (value: string) => {
		setListedFriends(
			friends.filter(({ username }) =>
				username.toLowerCase().includes(value.toLowerCase()),
			),
		);
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
					<SelectFriendsContext.Provider value={{ selected, setSelected }}>
						<TempPaper>
							<Title>
								Choose Participants {!!selected.length && selected.length}
							</Title>
							<SelectedTags tags={selected} />
							<Input
								type='search'
								startAdornment={<SearchIcon height='2px' />}
								placeholder='Search By Name'
								onChange={(e) => handleInputChange(e.target.value)}
							/>
							<p>Friends {listedFriends.length}</p>
							{listedFriends.map((friend, i) => (
								<UserCheckBox user={friend} key={i} />
							))}
							<Center>
								<Button
									type='submit'
									onClick={addChat}
									disabled={!selected.length}
								>
									Confirm
								</Button>
							</Center>
						</TempPaper>
					</SelectFriendsContext.Provider>
				</Fade>
			</CustomModal>
		</>
	);
};

const TempPaper = styled.div`
	padding: 25px;
	border-radius: 5px;
	/* background-color: ${({ theme }) => theme.colors.kakaoYellow}; */
	background: white;
	border: 1px solid ${({ theme }) => theme.colors.kakaoYellow};
	box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.kakaoYellow};
	height: 30rem;
	width: 20rem;
	max-height: 100%;
`;
