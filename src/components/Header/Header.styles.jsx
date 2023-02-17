import { TABLET } from "@/constants";
import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
`;

export const NavBar = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	background-color: #d9d9d913;
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: flex-end;
	box-shadow: 0px 10px 10px -5px rgba(255, 255, 255, 0.3);

	@media screen and (max-width: ${TABLET}) {
		justify-content: space-between;
	}
`;

export const NavMenuContainer = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: ${TABLET}) {
		display: ${({ isMenuClicked }) => (isMenuClicked ? "inherit" : "none")};
		width: 100%;
		height: 100vh;
		background-color: #1b1310;
		opacity: 0.7;
		position: absolute;
		top: 0;
		z-index: -1;
		justify-content: center;
	}
`;

export const NavMenu = styled.ul`
	display: flex;

	@media screen and (max-width: ${TABLET}) {
		display: block;
		text-align: center;
	}
`;

export const HeaderSocials = styled.div`
	display: none;

	@media screen and (max-width: ${TABLET}) {
		display: flex;
		align-items: center;
	}
`;
