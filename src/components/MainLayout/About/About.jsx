import { AboutContainer, AboutSection, Introduction, MyPicture } from "./About.styles";
import { ABOUT_TITLE, INTRODUCTION } from "@/constants";
import { Title } from "../../index";

export function About() {
	return (
		<AboutSection id="about">
			<AboutContainer>
				<Title content={ABOUT_TITLE} />
				<Introduction>{INTRODUCTION}</Introduction>
			</AboutContainer>
			<MyPicture />
		</AboutSection>
	);
}
