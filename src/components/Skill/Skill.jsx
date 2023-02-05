import styled from "styled-components";
import { Title } from "../index";
import { IconContext } from "react-icons";
import { SKILL_TITLE, SKILL_CONTENTS, SKILL_ICONS, SKILLS_ICON_NAMES, TABLET, SMARTPHONE } from "@/constants";

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
		<SkillsContainer>
			<Title content={SKILL_TITLE} />
			<SkillContainer>
				{SKILL_CONTENTS.map((skill, idx) => (
					<SkillContent key={idx}>
						<IconContext.Provider value={{ color: "#ccc", size: "3rem" }}>
							{SKILL_ICONS[skill]}
						</IconContext.Provider>
						<IconName>{SKILLS_ICON_NAMES[skill]}</IconName>
					</SkillContent>
				))}
			</SkillContainer>
		</SkillsContainer>
	);
}
