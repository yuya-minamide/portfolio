import { About, Contact, Home, Portfolio, Skill } from "../index";
import { PageLayoutContainer } from "./MainLayout.styles";

export function MainLayout() {
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
