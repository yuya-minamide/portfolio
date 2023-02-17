import { Technical, Title } from "./ProjectTitle.styles";

export function ProjectTitle({ title, technical }) {
	return (
		<>
			<Title>{title}</Title>
			<Technical>{technical}</Technical>
		</>
	);
}
