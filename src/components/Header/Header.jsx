import { HeaderContainer, HeaderSocials, NavBar, NavMenu, NavMenuContainer } from "./Header.styles";
import { BurgerMenu, NavContents, SocialIcon } from "../index";
import React, { useState } from "react";

export function Header() {
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	return (
		<HeaderContainer>
			<NavBar>
				<BurgerMenu isMenuClicked={isMenuClicked} onClick={() => setIsMenuClicked(!isMenuClicked)} />

				<HeaderSocials>
					<SocialIcon />
				</HeaderSocials>

				<NavMenuContainer isMenuClicked={isMenuClicked}>
					<NavMenu>
						<NavContents />
					</NavMenu>
				</NavMenuContainer>
			</NavBar>
		</HeaderContainer>
	);
}
