import { TABLET } from "@/constants";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PortfolioContainer = styled.section`
	margin-top: 30%;
	animation: ${({ inView }) =>
		inView
			? css`
					${fadeIn} 4000ms ease
			  `
			: "none"};

	@media screen and (max-width: ${TABLET}) {
		text-align: center;
	}
`;
