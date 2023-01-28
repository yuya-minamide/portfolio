import { CommonButton } from "../index";

export function ProjectDescription({ description, url, button }) {
	return (
		<div>
			<p>{description}</p>
			<CommonButton url={url} content={button} />
		</div>
	);
}
