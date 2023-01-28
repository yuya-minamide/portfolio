import { Title, PortfolioContentLeft, PortfolioContentRight } from "../index";
import { PORTFOLIO_TITLE, LEFT_CONTENT, RIGHT_CONTENT } from "@/constants";

export function Portfolio() {
	return (
		<div>
			<Title content={PORTFOLIO_TITLE} />
			<PortfolioContentLeft content={LEFT_CONTENT} />
			<PortfolioContentRight content={RIGHT_CONTENT} />
		</div>
	);
}
