import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { HOME, ABOUT, PORTFOLIO, SKILLS, CONTACT, GITHUB, LINKEDIN, INSTAGRAM, FACEBOOK } from "../../constants";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { BurgerMenu, SocialIcon } from "../index";

const HeaderContainer = styled.header`
	width: 100%;
`;

const NavBar = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	background-color: #d9d9d913;
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: flex-end;
	box-shadow: 0px 10px 10px -5px rgba(255, 255, 255, 0.3);

	@media screen and (max-width: 960px) {
		justify-content: space-between;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: 960px) {
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

const NavMenu = styled.ul`
	display: flex;

	@media screen and (max-width: 960px) {
		display: block;
		text-align: center;
	}
`;

const NavContent = styled.li`
	padding: 5px 20px 10px 0;
`;

const NavContentLink = styled(Link)`
	font-size: 1.5rem;
`;

const HeaderSocials = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: flex;
		align-items: center;
	}
`;

const HeaderSocialsLink = styled(Link)`
	@media screen and (max-width: 960px) {
		padding-right: 20px;
	}
`;

const Header = () => {
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	return (
		<HeaderContainer>
			<NavBar>
				<BurgerMenu isMenuClicked={isMenuClicked} onClick={() => setIsMenuClicked(!isMenuClicked)} />

				<HeaderSocials>
					<SocialIcon url={GITHUB}>
						<HeaderSocialsLink>
							<BsGithub />
						</HeaderSocialsLink>
					</SocialIcon>
					<SocialIcon url={LINKEDIN}>
						<HeaderSocialsLink>
							<BsLinkedin />
						</HeaderSocialsLink>
					</SocialIcon>
					<SocialIcon url={INSTAGRAM}>
						<HeaderSocialsLink>
							<BsInstagram />
						</HeaderSocialsLink>
					</SocialIcon>
					<SocialIcon url={FACEBOOK}>
						<HeaderSocialsLink>
							<BsFacebook />
						</HeaderSocialsLink>
					</SocialIcon>
				</HeaderSocials>

				<Menu isMenuClicked={isMenuClicked}>
					<NavMenu>
						<NavContent>
							<NavContentLink href="/">{HOME}</NavContentLink>
						</NavContent>
						<NavContent>
							<NavContentLink href="/">{ABOUT}</NavContentLink>
						</NavContent>
						<NavContent>
							<NavContentLink href="/">{PORTFOLIO}</NavContentLink>
						</NavContent>
						<NavContent>
							<NavContentLink href="/">{SKILLS}</NavContentLink>
						</NavContent>
						<NavContent>
							<NavContentLink href="/">{CONTACT}</NavContentLink>
						</NavContent>
					</NavMenu>
				</Menu>
			</NavBar>
		</HeaderContainer>
	);
};

export default Header;
