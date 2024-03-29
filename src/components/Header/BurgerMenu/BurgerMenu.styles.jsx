import { TABLET } from "@/constants";
import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
	@media screen and (max-width: ${TABLET}) {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		cursor: pointer;
		padding: 1.2rem;

		div {
			width: 3rem;
			height: 0.1rem;
			background-color: #fff;
			opacity: 0.6;
			border-radius: 0.3rem;

			&:nth-child(1) {
				transform: ${({ isMenuClicked }) => (isMenuClicked ? "rotate(45deg) translate(0.75em, 1.25em)" : "rotate(0) translate(0)")};
				transition: ${({ isMenuClicked }) => (isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;")};
			}
			&:nth-child(2) {
				transform: ${({ isMenuClicked }) => (isMenuClicked ? "scale(0.1)" : "rotate(0) translate(0)")};
				transition: ${({ isMenuClicked }) => (isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;")};
			}
			&:nth-child(3) {
				transform: ${({ isMenuClicked }) => (isMenuClicked ? "rotate(135deg) translate(-0.5em, 1em)" : "rotate(0) translate(0)")};
				transition: ${({ isMenuClicked }) => (isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;")};
			}
		}
	}
`;
