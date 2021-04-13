import { SelectFriendsContext, UserProps } from '@lib/context';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Tag } from './Tag';

export const SelectedTags = () => {
	const { selected: tags } = useContext(SelectFriendsContext);

	return (
		<Container>
			{tags.map((tag, i) => (
				<Tag username={tag.username} key={i} />
			))}
		</Container>
	);
};

const Container = styled.div``;
