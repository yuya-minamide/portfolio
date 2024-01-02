import { Title } from "../../index";
import { SKILL_TITLE, SKILL_DETAILES } from "@/constants";
import { IconContext } from "react-icons";
import { IconName, SkillContainer, SkillsContainer, SkillContent } from "./Skill.styles";
import { useInView } from "react-intersection-observer";

export function Skill() {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	return (
		<SkillsContainer id="skills" inView={inView} ref={ref}>
			<Title content={SKILL_TITLE} />
			<SkillContainer>
				{Object.values(SKILL_DETAILES).map((skill, index) => (
					<SkillContent key={index}>
						<IconContext.Provider value={{ color: "#ccc", size: "3rem" }}>{skill.icon}</IconContext.Provider>
						<IconName>{skill.name}</IconName>
					</SkillContent>
				))}
			</SkillContainer>
		</SkillsContainer>
	);
}
