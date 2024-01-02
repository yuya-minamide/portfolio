import { TABLET, SMARTPHONE } from "@/constants";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SkillsContainer = styled.section`
	margin-top: 30%;
	animation: ${({ inView }) =>
		inView
			? css`
					${fadeIn} 4000ms ease
			  `
			: "none"};
`;

export const SkillContainer = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
`;

export const SkillContent = styled.li`
	text-align: center;
	margin: 0 20px 30px 20px;

	@media screen and (max-width: ${TABLET}) {
		width: 16%;

		@media screen and (max-width: ${SMARTPHONE}) {
			width: 19%;
		}
	}
`;

export const IconName = styled.p`
	font-size: 1.2rem;
	margin-top: 4px;

	@media screen and (max-width: ${SMARTPHONE}) {
		font-size: 0.8rem;
	}
`;
