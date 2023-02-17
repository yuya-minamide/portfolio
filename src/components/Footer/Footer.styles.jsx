import { TABLET, SMARTPHONE } from "@/constants";
import styled from "styled-components";

export const FooterContainer = styled.div`
	width: 100%;
	margin: 60px 0 10px 0;
	padding: 20px 0 10px 0;
	box-shadow: 0px -10px 10px -5px rgba(255, 255, 255, 0.3);
`;

export const FooterContent = styled.p`
	width: 100%;
	text-align: center;

	@media screen and (max-width: ${TABLET}) {
		font-size: 0.8rem;

		@media screen and (max-width: ${SMARTPHONE}) {
			font-size: 0.6rem;
		}
	}
`;
