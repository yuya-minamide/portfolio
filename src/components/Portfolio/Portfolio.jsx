import { PORTFOLIO_CONTENTS, PORTFOLIO_TITLE } from "@/constants";
import { PortfolioContainer } from "./Portfolio.styles";
import { PortfolioContentLeft, PortfolioContentRight, Title } from "../index";

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
