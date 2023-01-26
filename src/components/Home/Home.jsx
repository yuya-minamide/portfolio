import styled from "styled-components";
import { CommonButton } from "../index";
import {
	RESUME_LINK,
	RESUME,
	GREETING,
	MY_NAME,
	MY_POSITION,
	SHORT_INTRODUCTION1,
	SHORT_INTRODUCTION2,
	SHORT_INTRODUCTION3,
} from "../../constants/index";

const TabletIndention = styled.br`
	display: none;
	@media (max-width: 960px) {
		display: block;
	}
`;

const HomeContainer = styled.section`
	margin-top: 20%;

	@media screen and (max-width: 960px) {
		margin-top: 30%;
	}

	@media screen and (max-width: 520px) {
		margin-top: 50%;
	}
`;

const Greeting = styled.h4`
	color: var(--color-orange);
`;

const Title = styled.h1`
	line-height: 1.2;
	margin: 10px 0;
`;

const ShortIntroduction = styled.p`
	font-size: 1.2rem;
`;

export function Home() {
	return (
		<HomeContainer id="home">
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
