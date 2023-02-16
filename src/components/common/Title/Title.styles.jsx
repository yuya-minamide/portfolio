import { SMARTPHONE, TABLET } from "@/constants";
import styled from "styled-components";

export const TitleContainer = styled.h1`
	width: 70%;
	border-bottom: solid 3px var(--color-orange);
	margin-bottom: 40px;

	@media screen and (max-width: ${TABLET}) {
		width: 100%;

		@media screen and (max-width: ${SMARTPHONE}) {
			font-size: 1.5rem;
			border-bottom: solid 2px var(--color-orange);
			margin-bottom: 20px;
		}
	}
`;
