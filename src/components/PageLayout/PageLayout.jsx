import { TABLET } from "@/constants";
import { About, Contact, Home, Portfolio, Skill } from "../index";
import styled from "styled-components";

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
			<Skill />
			<Contact />
		</PageLayoutContainer>
	);
}
