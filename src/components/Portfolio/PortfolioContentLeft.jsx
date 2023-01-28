import { ProjectTitle, ProjectDescription, ProjectVideo } from "../index";

export function PortfolioContentLeft({ content }) {
	return (
		<div>
			<ProjectTitle title={content.title} technical={content.technical} />
			<ProjectDescription description={content.description} url={content.url} button={content.button} />
			<ProjectVideo title={content.title} video={content.video} />
		</div>
	);
}
