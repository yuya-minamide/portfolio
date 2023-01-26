import styled from "styled-components";
import { Home, About } from "../index";

const PageLayoutContainer = styled.div`
	margin: 0 15%;

	@media screen and (max-width: 960px) {
		margin: 0 10%;
	}
`;

export function PageLayout() {
	return (
		<PageLayoutContainer>
			<Home />
			<About />
		</PageLayoutContainer>
	);
}
