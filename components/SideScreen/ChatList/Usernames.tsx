import { UserProps } from '@lib/context';
import React from 'react';

interface Props {
	chattees: UserProps[];
}

export const Usernames = ({ chattees }: Props) => {
	return (
		<>
			{chattees.map((chattee, i) => (
				<span key={i}>
					{i < chattees.length - 1
						? chattee.username + ', '
						: chattee.username + ' ' + chattees.length}
				</span>
			))}
		</>
	);
};
