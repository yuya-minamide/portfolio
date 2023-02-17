import { SMARTPHONE, TABLET } from "@/constants";
import styled from "styled-components";

export const TabletIndention = styled.br`
	display: none;
	@media (max-width: ${TABLET}) {
		display: block;
	}
`;

export const HomeContainer = styled.section`
	padding-top: 20%;

	@media screen and (max-width: ${TABLET}) {
		padding-top: 30%;

		@media screen and (max-width: ${SMARTPHONE}) {
			padding-top: 50%;
		}
	}
`;

export const Greeting = styled.h4`
	color: var(--color-orange);
`;

export const Title = styled.h1`
	line-height: 1.2;
	margin: 10px 0;
`;

export const ShortIntroduction = styled.p`
	font-size: 1.2rem;
`;
