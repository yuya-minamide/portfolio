import { PORTFOLIO_CONTENTS, PORTFOLIO_TITLE, TABLET } from "@/constants";
import { PortfolioContentLeft, PortfolioContentRight, Title } from "../index";
import styled from "styled-components";

const PortfolioContainer = styled.section`
	margin-top: 30%;

	@media screen and (max-width: ${TABLET}) {
		text-align: center;
	}
`;

export function Portfolio() {
	return (
		<PortfolioContainer id="portfolio">
			<Title content={PORTFOLIO_TITLE} />
			{PORTFOLIO_CONTENTS.map((item, index) =>
				index % 2 === 0 ? <PortfolioContentLeft key={index} content={item} /> : <PortfolioContentRight key={index} content={item} />
			)}
		</PortfolioContainer>
	);
}
