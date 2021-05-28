import React from 'react';
import styled from 'styled-components';

export const Chattees = ({ names }: { names: string[] }) => {
	return (
		<>
			{names.map((name, i) => {
				if (i < names.length - 1) {
					return <Name key={i}>{name}, </Name>;
				}
				return <Name key={i}>{name}</Name>;
			})}
			<Name>{names.length - 2 && names.length}</Name>
		</>
	);
};

const Name = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
`;
