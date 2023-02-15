import { SMARTPHONE, TABLET } from "@/constants";
import { ProjectDescription, ProjectTitle, ProjectVideo } from "../index";
import styled from "styled-components";

const PortfolioContainer = styled.div`
	display: flex;
	position: relative;
	margin-bottom: 160px;

	@media screen and (max-width: ${TABLET}) {
		flex-direction: column;
		margin-bottom: 40px;

		@media screen and (max-width: ${SMARTPHONE}) {
			margin-bottom: 20px;
		}
	}
`;

const LeftContainer = styled.div`
	width: 50%;

	@media screen and (max-width: ${TABLET}) {
		width: 100%;
	}
`;
const RightContainer = styled.div`
	width: 50%;
	position: absolute;
	right: 30px;
	z-index: 1;

	@media screen and (max-width: ${TABLET}) {
		width: 100%;
		position: static;
		text-align: center;
		margin-bottom: 20px;
	}
`;
const TitleContainer = styled.div`
	margin: 0 0 40px 50px;

	@media screen and (max-width: ${TABLET}) {
		margin: 0 0 20px 0;
	}
`;
const DescriptionContainer = styled.div`
	background-color: var(--color-second-bg);
	padding: 16px 28px;

	@media screen and (max-width: ${TABLET}) {
		padding: 30px 40px;

		@media screen and (max-width: ${SMARTPHONE}) {
			padding: 20px 20px;
		}
	}
`;

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
