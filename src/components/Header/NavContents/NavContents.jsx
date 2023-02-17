import { NAV_MENU_CONTENTS } from "@/constants";
import { NavContent, NavContentLink } from "./NavContents.styles";

export function NavContents() {
	return NAV_MENU_CONTENTS.map((content, index) => (
		<NavContent key={index}>
			<NavContentLink href={`#${content.toLowerCase()}`}>{content}</NavContentLink>
		</NavContent>
	));
}
