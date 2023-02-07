import styled from "styled-components";
import { Title } from "../index";
import { TABLET, SMARTPHONE, SKILL_TITLE, SKILL_DETAILES } from "@/constants";
import { IconContext } from "react-icons";

const SkillsContainer = styled.section`
	margin-top: 30%;
`;

const SkillContainer = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
`;

const SkillContent = styled.li`
	text-align: center;
	margin: 0 20px 30px 20px;

	@media screen and (max-width: ${TABLET}) {
		width: 16%;

		@media screen and (max-width: ${SMARTPHONE}) {
			width: 19%;
		}
	}
`;

const IconName = styled.p`
	font-size: 1.2rem;
	margin-top: 4px;

	@media screen and (max-width: ${SMARTPHONE}) {
		font-size: 0.8rem;
	}
`;

export function Skill() {
	return (
		<SkillsContainer id="skills">
			<Title content={SKILL_TITLE} />
			<SkillContainer>
				{Object.values(SKILL_DETAILES).map((skill) => (
					<SkillContent>
						<IconContext.Provider value={{ color: "#ccc", size: "3rem" }}>{skill.icon}</IconContext.Provider>
						<IconName>{skill.name}</IconName>
					</SkillContent>
				))}
			</SkillContainer>
		</SkillsContainer>
	);
}
