import { SOCIAL_CONTENTS } from "@/constants";
import { IconContext } from "react-icons";
import { SocialLink } from "./SocialIcon.styles";

export function SocialIcon() {
	return Object.values(SOCIAL_CONTENTS).map((contact, index) => (
		<>
			<IconContext.Provider key={index} value={{ color: "#ccc", size: "2.1rem" }}>
				<SocialLink href={contact.link}>{contact.icon}</SocialLink>
			</IconContext.Provider>
		</>
	));
}
