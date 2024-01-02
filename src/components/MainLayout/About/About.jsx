import { AboutContainer, AboutSection, Introduction, MyPicture } from "./About.styles";
import { ABOUT_TITLE, INTRODUCTION } from "@/constants";
import { Title } from "../../index";
import { useInView } from "react-intersection-observer";

export function About() {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	return (
		<AboutSection id="about" inView={inView} ref={ref}>
			<AboutContainer>
				<Title content={ABOUT_TITLE} />
				<Introduction>{INTRODUCTION}</Introduction>
			</AboutContainer>
			<MyPicture />
		</AboutSection>
	);
}
