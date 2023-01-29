import styled from "styled-components";

const Title = styled.h2`
	font-weight: 600;
	margin-bottom: 20px;
`;

const Technical = styled.p`
	color: var(--color-orange);

	@media screen and (max-width: 520px) {
		font-size: 0.8rem;
	}
`;

export function ProjectTitle({ title, technical }) {
	return (
		<>
			<Title>{title}</Title>
			<Technical>{technical}</Technical>
		</>
	);
}
