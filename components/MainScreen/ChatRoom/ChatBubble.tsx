import { MessageProps, UserProps } from '@lib/context';
import React from 'react';
import styled from 'styled-components';

interface Props {
	user: UserProps;
	message: MessageProps;
}

export const ChatBubble = ({ user, message }: Props) => {
	return (
		<Container>
			<p>{message} </p>
		</Container>
	);
};

const Container = styled.div``;
