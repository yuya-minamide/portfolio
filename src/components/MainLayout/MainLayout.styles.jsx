import { TABLET } from "@/constants";
import styled from "styled-components";

export const PageLayoutContainer = styled.main`
	margin: 0 13%;

	@media screen and (max-width: ${TABLET}) {
		margin: 0 10%;
	}
`;
