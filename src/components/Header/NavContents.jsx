import Link from "next/link";
import styled from "styled-components";
import { HOME, ABOUT, PORTFOLIO, SKILLS, CONTACT } from "../../constants/index";

const NavContent = styled.li`
	padding: 5px 20px 10px 0;
`;

const NavContentLink = styled(Link)`
	font-size: 1.5rem;
`;

const NavContentsArr = [HOME, ABOUT, PORTFOLIO, SKILLS, CONTACT];
export function NavContents() {
	return NavContentsArr.map((content) => (
		<NavContent>
			<NavContentLink href="/">{content}</NavContentLink>
		</NavContent>
	));
}
