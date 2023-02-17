import { TABLET, SMARTPHONE } from "@/constants";
import styled from "styled-components";

export const SkillsContainer = styled.section`
	margin-top: 30%;
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
