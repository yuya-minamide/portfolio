import { About, Contact, Home, Portfolio, Skill } from "../index";
import { PageLayoutContainer } from "./PageLayout.styles";

export function PageLayout() {
	return (
		<PageLayoutContainer>
			<Home />
			<About />
			<Portfolio />
			<Skill />
			<Contact />
		</PageLayoutContainer>
	);
}
