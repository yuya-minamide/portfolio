import { Title, PortfolioContentLeft } from "../index";
import { PORTFOLIO_TITLE } from "@/constants";

export function Portfolio() {
	return (
		<div>
			<Title content={PORTFOLIO_TITLE} />
			<PortfolioContentLeft />
		</div>
	);
}
