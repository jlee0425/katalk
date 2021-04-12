import { UserProps } from '@lib/context';
import React from 'react';
import styled from 'styled-components';
import { Tag } from './Tag';

interface Props {
	tags: UserProps[];
}

export const SelectedTags = ({ tags }: Props) => {
	return (
		<Container>
			{tags.map((tag, i) => (
				<Tag username={tag.username} key={i} />
			))}
		</Container>
	);
};

const Container = styled.div``;
