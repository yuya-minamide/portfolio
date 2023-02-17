import { ProjectDescription, ProjectTitle, ProjectVideo } from "../../index";
import { DescriptionContainer, LeftContainer, PortfolioContainer, RightContainer, TitleContainer } from "./PortfolioContentLeft.styles";

export function PortfolioContentLeft({ content }) {
	return (
		<PortfolioContainer>
			<LeftContainer>
				<TitleContainer>
					<ProjectTitle title={content.title} technical={content.technical} />
				</TitleContainer>

				<DescriptionContainer>
					<ProjectDescription description={content.description} url={content.url} button={content.button} />
				</DescriptionContainer>
			</LeftContainer>

			<RightContainer>
				<ProjectVideo title={content.title} video={content.video} />
			</RightContainer>
		</PortfolioContainer>
	);
}
