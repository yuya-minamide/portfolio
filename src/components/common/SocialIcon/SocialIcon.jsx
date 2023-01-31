import Link from "next/link";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { SOCIAL_CONTENTS, SOCIAL_CONTENT_LINKS, SOCIAL_CONTENT_ICONS, TABLET } from "@/constants";

const SocialLink = styled(Link)`
	margin: 0;

	@media screen and (max-width: ${TABLET}) {
		margin-right: 20px;
	}
`;

export function SocialIcon() {
	return SOCIAL_CONTENTS.map((contact) => (
		<>
			<IconContext.Provider value={{ color: "#ccc", size: "2.1rem" }}>
				<SocialLink href={SOCIAL_CONTENT_LINKS[contact]}>{SOCIAL_CONTENT_ICONS[contact]}</SocialLink>
			</IconContext.Provider>
		</>
	));
}
