import { SMARTPHONE, TABLET } from "@/constants";
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

export const AboutSection = styled.section`
	margin-top: 30%;
	display: flex;
	animation: ${({ inView }) =>
		inView
			? css`
					${fadeIn} 4000ms ease
			  `
			: "none"};

	@media screen and (max-width: ${TABLET}) {
		flex-direction: column;
		align-items: center;
	}
`;

export const AboutContainer = styled.div`
	width: 50%;

	@media screen and (max-width: ${TABLET}) {
		order: 2;
		text-align: center;
		width: 80%;

		@media screen and (max-width: ${SMARTPHONE}) {
			width: 90%;
		}
	}
`;

export const Introduction = styled.p`
	width: 90%;

	@media screen and (max-width: ${TABLET}) {
		width: 100%;
	}
`;

export const MyPicture = styled.div`
	width: 350px;
	height: 350px;
	border-radius: 50%;
	background-size: cover;
	background-position: center;
	background-image: url("assets/person.jpg");
	border: solid 1px var(--color-orange);
	margin-left: 80px;
	box-shadow: 0 0 14px var(--color-orange);

	@media screen and (max-width: ${TABLET}) {
		order: 1;
		margin: 0 0 30px 0;
		width: 200px;
		height: 200px;
	}
`;
