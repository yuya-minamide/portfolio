import styled from "styled-components";

const PageLayoutContainer = styled.div`
	margin: 0 15%;

	@media screen and (max-width: 960px) {
		margin: 0 10%;
	}
`;

export function PageLayout() {
	return (
		<PageLayoutContainer>
			<div>Hi</div>
		</PageLayoutContainer>
	);
}
