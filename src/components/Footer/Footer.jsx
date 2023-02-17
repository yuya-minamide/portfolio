import { FOOTER_CONTENT } from "@/constants";
import { FooterContainer, FooterContent } from "./Footer.styles";

export function Footer() {
	return (
		<FooterContainer>
			<FooterContent>&copy;{FOOTER_CONTENT}</FooterContent>
		</FooterContainer>
	);
}
