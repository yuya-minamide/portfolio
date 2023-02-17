import { SMARTPHONE } from "@/constants";
import styled from "styled-components";

export const Title = styled.h2`
	font-weight: 600;
	margin-bottom: 20px;
`;

export const Technical = styled.p`
	color: var(--color-orange);

	@media screen and (max-width: ${SMARTPHONE}) {
		font-size: 0.8rem;
	}
`;
