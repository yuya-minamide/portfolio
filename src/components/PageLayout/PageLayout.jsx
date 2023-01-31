import styled from "styled-components";
import { Home, About, Portfolio } from "../index";
import { TABLET } from "@/constants";

const PageLayoutContainer = styled.div`
	margin: 0 13%;

	@media screen and (max-width: ${TABLET}) {
		margin: 0 10%;
	}
`;

export function PageLayout() {
	return (
		<PageLayoutContainer>
			<Home />
			<About />
			<Portfolio />
		</PageLayoutContainer>
	);
}
