/**
 * Header
 */
export const HOME = "Home";
export const ABOUT = "About";
export const PORTFOLIO = "Portfolio";
export const SKILLS = "Skills";
export const CONTACT = "Contact";

/**
 * SocialIcon URL
 */
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
export const SOCIAL_CONTENTS = ["GitHub", "LinkedIn", "Instagram", "FaceBook"];
export const SOCIAL_CONTENT_LINKS = {
	GitHub: "https://github.com/yuya-minamide",
	LinkedIn: "https://www.linkedin.com/in/yuya-minamide",
	Instagram: "https://www.instagram.com/dettu1003",
	FaceBook: "https://www.facebook.com/people/%E5%8D%97%E5%87%BA%E9%9B%84%E5%93%89/100063647795454/",
};
export const SOCIAL_CONTENT_ICONS = {
	GitHub: <BsGithub />,
	LinkedIn: <BsLinkedin />,
	Instagram: <BsInstagram />,
	FaceBook: <BsFacebook />,
};
