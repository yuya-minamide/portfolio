import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMaterialui, SiGit, SiGithub } from "react-icons/si";

/**
 * Break point
 */
export const TABLET = "960px";
export const SMARTPHONE = "520px";

/**
 * Header
 */
export const NAV_MENU_CONTENTS = ["Home", "About", "Portfolio", "Skills", "Contact"];

/**
 * SocialIcon URL
 */
export const SOCIAL_CONTENTS = {
	github: {
		link: "https://github.com/yuya-minamide",
		icon: <BsGithub />,
	},
	linkedin: {
		link: "https://www.linkedin.com/in/yuya-minamide",
		icon: <BsLinkedin />,
	},
	instagram: {
		link: "https://www.instagram.com/dettu1003",
		icon: <BsInstagram />,
	},
	facebook: {
		link: "https://www.facebook.com/people/%E5%8D%97%E5%87%BA%E9%9B%84%E5%93%89/100063647795454/",
		icon: <BsFacebook />,
	},
};

/**
 * Button URL
 */
export const RESUME_LINK = "/";

/**
 * Button contents
 */
export const RESUME = "Resume";

/**
 * Home
 */
export const GREETING = "Hi, my name is";
export const MY_NAME = "Yuya Minamide.";
export const MY_POSITION = "Frontend Developer.";
export const SHORT_INTRODUCTION1 = "I am a Frontend Developer.";
export const SHORT_INTRODUCTION2 = "I am specialized in frontend development";
export const SHORT_INTRODUCTION3 = "using React.js, Next.js, Typescript, and Redux.";

/**
 * About
 */
export const ABOUT_TITLE = "About Me";
export const INTRODUCTION =
	"As a front-end developer with a background in computer science and machine engineering, I have strong skills in HTML, CSS, JavaScript, React.js, and Next.js. I am a hard worker with good communication skills and a proven ability to problem-solve and think creatively. I am confident in my ability to create high-quality, user-friendly web experiences and am excited to bring my skills and experience to a new team.";

/**
 * Portfolio
 */
export const PORTFOLIO_TITLE = "My Portfolio";
export const PORTFOLIO_CONTENTS = [
	{
		title: "Weather forecast chat bot",
		technical: "Node.js, OpenWeather API, LINE API",
		description:
			"This chat bot will reply with the 4-day weather forecast for the city posted by the user. Weather forecast data is obtained from the OpenWeather API.",
		button: "See GitHub",
		url: "https://github.com/yuya-minamide/weather-forecast-bot",
		video: "/assets/demonstration.gif",
	},
	{
		title: "Portfolio Site",
		technical: "Next.js, Styled-component",
		description: "This is my portfolio site, created in Next.js. My own skills are represented on this site.",
		button: "See GitHub",
		url: "https://github.com/yuya-minamide/portfolio",
		video: "/assets/temp-picture.png",
	},
];

/**
 * Skill
 */
export const SKILL_TITLE = "My Skills";
export const SKILL_DETAILES = {
	html: {
		icon: <SiHtml5 />,
		name: "HTML",
	},
	css: {
		icon: <SiCss3 />,
		name: "CSS",
	},
	javascript: {
		icon: <SiJavascript />,
		name: "JS",
	},
	react: {
		icon: <SiReact />,
		name: "React",
	},
	next: {
		icon: <SiNextdotjs />,
		name: "Next",
	},
	node: {
		icon: <SiNodedotjs />,
		name: "Node",
	},
	materialui: {
		icon: <SiMaterialui />,
		name: "MUI",
	},
	git: {
		icon: <SiGit />,
		name: "Git",
	},
	github: {
		icon: <SiGithub />,
		name: "GitHub",
	},
};

/**
 * Contact
 */
export const CONTACT_TITLE = "My Contact";
export const CONTACT_SOCIALS = { github: SOCIAL_CONTENTS.github, linkedin: SOCIAL_CONTENTS.linkedin };
