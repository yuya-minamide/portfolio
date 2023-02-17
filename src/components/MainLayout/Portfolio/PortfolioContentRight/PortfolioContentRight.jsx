import { ProjectDescription, ProjectTitle, ProjectVideo } from "../../../index";
import { DescriptionContainer, LeftContainer, PortfolioContainer, RightContainer, TitleContainer } from "./PortfolioContentRight.styles";

export function PortfolioContentRight({ content }) {
	return (
		<PortfolioContainer>
			<LeftContainer>
				<ProjectVideo title={content.title} video={content.video} />
			</LeftContainer>

			<RightContainer>
				<TitleContainer>
					<ProjectTitle title={content.title} technical={content.technical} />
				</TitleContainer>

				<DescriptionContainer>
					<ProjectDescription description={content.description} url={content.url} button={content.button} />
				</DescriptionContainer>
			</RightContainer>
		</PortfolioContainer>
	);
}
