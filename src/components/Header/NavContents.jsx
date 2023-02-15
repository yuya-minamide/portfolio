import { NAV_MENU_CONTENTS } from "@/constants";
import Link from "next/link";
import styled from "styled-components";

const NavContent = styled.li`
	padding: 5px 20px 10px 0;
`;

const NavContentLink = styled(Link)`
	font-size: 1.5rem;
`;

export function NavContents() {
	return NAV_MENU_CONTENTS.map((content, index) => (
		<NavContent key={index}>
			<NavContentLink href={`#${content.toLowerCase()}`}>{content}</NavContentLink>
		</NavContent>
	));
}
