import { PORTFOLIO_CONTENTS, PORTFOLIO_TITLE } from "@/constants";
import { PortfolioContainer } from "./Portfolio.styles";
import { PortfolioContentLeft, PortfolioContentRight, Title } from "../../index";
import { useInView } from "react-intersection-observer";

export function Portfolio() {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	return (
		<PortfolioContainer id="portfolio" inView={inView} ref={ref}>
			<Title content={PORTFOLIO_TITLE} />
			{PORTFOLIO_CONTENTS.map((item, index) =>
				index % 2 === 0 ? <PortfolioContentLeft key={index} content={item} /> : <PortfolioContentRight key={index} content={item} />
			)}
		</PortfolioContainer>
	);
}
