import {
	GREETING,
	MY_NAME,
	MY_POSITION,
	RESUME,
	RESUME_LINK,
	SHORT_INTRODUCTION1,
	SHORT_INTRODUCTION2,
	SHORT_INTRODUCTION3,
} from "@/constants";
import { Greeting, HomeContainer, ShortIntroduction, TabletIndention, Title } from "./Home.styles";
import { CommonButton } from "../../index";
import { useInView } from "react-intersection-observer";

export function Home() {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	return (
		<HomeContainer id="home" inView={inView} ref={ref}>
			<Greeting>{GREETING}</Greeting>
			<Title>
				{MY_NAME}
				<br />
				{MY_POSITION}
			</Title>
			<ShortIntroduction>
				{SHORT_INTRODUCTION1} <TabletIndention />
				{SHORT_INTRODUCTION2} <br />
				{SHORT_INTRODUCTION3}
			</ShortIntroduction>
			<CommonButton url={RESUME_LINK} content={RESUME} />
		</HomeContainer>
	);
}
