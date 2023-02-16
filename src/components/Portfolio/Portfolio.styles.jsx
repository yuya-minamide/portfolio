import { TABLET } from "@/constants";
import styled from "styled-components";

export const PortfolioContainer = styled.section`
	margin-top: 30%;

	@media screen and (max-width: ${TABLET}) {
		text-align: center;
	}
`;
