import Link from "next/link";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { TABLET, SOCIAL_CONTENTS } from "@/constants";

const SocialLink = styled(Link)`
	margin: 0;

	@media screen and (max-width: ${TABLET}) {
		margin-right: 20px;
	}
`;

export function SocialIcon() {
	return Object.values(SOCIAL_CONTENTS).map((contact, index) => (
		<>
			<IconContext.Provider key={index} value={{ color: "#ccc", size: "2.1rem" }}>
				<SocialLink href={contact.link}>{contact.icon}</SocialLink>
			</IconContext.Provider>
		</>
	));
}
