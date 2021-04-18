import { Modal, TextField } from '@material-ui/core';
import styled from 'styled-components';

export enum VARIANT {
	BROWN,
	YELLOW,
}

interface AdditionalProps {
	variant?: VARIANT;
}

export const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const GridCenter = styled.div`
	display: grid;
	place-items: center;
`;

export const KatalkButton = styled.button<AdditionalProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	color: whitesmoke;
	border-radius: 5px;
	${({ theme, variant }) => {
		switch (variant) {
			case VARIANT.BROWN:
				return `background-color: ${theme.colors.kakaoBrown};
        border: 1px solid ${theme.colors.kakaoBrown};
        box-shadow: 1px 1px 5px ${theme.colors.kakaoBrown};`;
			case VARIANT.YELLOW:
				return `background-color: ${theme.colors.kakaoYellow};
        border: 1px solid ${theme.colors.kakaoYellow};
        box-shadow: 1px 1px 5px ${theme.colors.kakaoYellow};`;
		}
	}}
	height: 35px;
	font-weight: 700;
	width: 80%;
	margin-top: 1.8rem;
`;

export const Paper = styled.div<AdditionalProps>`
	padding: 25px;
	border-radius: 5px;
	${({ theme, variant }) => {
		switch (variant) {
			case VARIANT.BROWN:
				return `background-color: ${theme.colors.kakaoBrown};
        border: 1px solid ${theme.colors.kakaoBrown};
        box-shadow: 1px 1px 5px ${theme.colors.kakaoBrown};`;
			case VARIANT.YELLOW:
				return `background-color: ${theme.colors.kakaoYellow};
        border: 1px solid ${theme.colors.kakaoYellow};
        box-shadow: 1px 1px 5px ${theme.colors.kakaoYellow};`;
		}
	}}
	height: 15rem;
	width: 15rem;
	max-height: 100%;
`;

export const SideScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
	background: #ffffff;
`;

export const CustomModal = styled(Modal)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled(TextField)`
	color: ${({ theme }) => theme.colors.kakaoBrown};
`;

export const Title = styled.h4`
	color: ${({ theme }) => theme.colors.kakaoBrown};
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 400px;
`;

export const Logo = styled.img`
	margin-bottom: 35px;
	height: 70%;
	max-height: 250px;
`;
