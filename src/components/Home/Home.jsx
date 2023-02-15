import {
	GREETING,
	MY_NAME,
	MY_POSITION,
	RESUME,
	RESUME_LINK,
	SHORT_INTRODUCTION1,
	SHORT_INTRODUCTION2,
	SHORT_INTRODUCTION3,
	SMARTPHONE,
	TABLET,
} from "@/constants";
import { CommonButton } from "../index";
import styled from "styled-components";

const TabletIndention = styled.br`
	display: none;
	@media (max-width: ${TABLET}) {
		display: block;
	}
`;

const HomeContainer = styled.section`
	padding-top: 20%;

	@media screen and (max-width: ${TABLET}) {
		padding-top: 30%;

		@media screen and (max-width: ${SMARTPHONE}) {
			padding-top: 50%;
		}
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
