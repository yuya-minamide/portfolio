import Link from "next/link";
import styled from "styled-components";
import { NAV_MENU_CONTENTS } from "../../constants/index";

const NavContent = styled.li`
	padding: 5px 20px 10px 0;
`;

const NavContentLink = styled(Link)`
	font-size: 1.5rem;
`;

export function NavContents() {
	return NAV_MENU_CONTENTS.map((content) => (
		<NavContent>
			<NavContentLink href={`#${content.toLowerCase()}`}>{content}</NavContentLink>
		</NavContent>
	));
}
