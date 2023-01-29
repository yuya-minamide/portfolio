import styled from "styled-components";
import { Title, PortfolioContentLeft, PortfolioContentRight } from "../index";
import { PORTFOLIO_TITLE, PORTFOLIO_CONTENTS, TABLET } from "@/constants";

const PortfolioContainer = styled.section`
	margin-top: 30%;

	@media screen and (max-width: ${TABLET}) {
		text-align: center;
	}
`;

export function Portfolio() {
	return (
		<PortfolioContainer>
			<Title content={PORTFOLIO_TITLE} />
			{PORTFOLIO_CONTENTS.map((item, index) => {
				if (index % 2 === 0) {
					return <PortfolioContentLeft key={index} content={item} />;
				} else {
					return <PortfolioContentRight key={index} content={item} />;
				}
			})}
		</PortfolioContainer>
	);
}
