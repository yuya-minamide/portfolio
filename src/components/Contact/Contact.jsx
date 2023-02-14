import Link from "next/link";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { Title } from "../index";
import { TABLET, CONTACT_TITLE, CONTACT_SOCIALS } from "@/constants";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactContainer = styled.section`
	margin-top: 30%;
`;

const ContactSocialContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	margin-top: 100px;

	&:before {
		content: "";
		width: 30%;
		height: 1px;
		background: var(--color-orange);
	}

	&:after {
		content: "";
		width: 30%;
		height: 1px;
		background: var(--color-orange);
	}

	@media screen and (max-width: ${TABLET}) {
		gap: 1rem;
		margin-top: 10px;
	}
`;

const SocialLink = styled(Link)`
	margin: 0;

	@media screen and (max-width: ${TABLET}) {
		margin-right: 20px;
	}
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	margin: 20px auto 0 auto;

	@media screen and (max-width: ${TABLET}) {
		width: 100%;
	}
`;

const YourInfo = styled.input`
	margin-bottom: 20px;
	width: 100%;
	padding: 10px 20px;
	font-size: 1.2rem;
	border-radius: 6px;
`;

const MessageBox = styled.textarea`
	margin-bottom: 40px;
	width: 100%;
	padding: 10px 20px;
	font-size: 1.2rem;
	border-radius: 6px;
`;

const SendButton = styled.button`
	font-family: "Alegreya", serif;
	cursor: pointer;
	color: var(--color-white);
	position: relative;
	display: inline-block;
	border: solid 2px var(--color-orange);
	background-color: var(--color-bg);
	border-radius: 8px;
	font-size: 1.4rem;
	font-weight: bold;
	padding: 10px 0;
	text-align: center;
	width: 200px;
	z-index: 1;
	&:before {
		border-radius: 8px;
		content: "";
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #d9d9d913;
		position: absolute;
		z-index: -1;
		transform: scaleX(0);
		transform-origin: 50%;
		transition: transform ease-in-out 0.5s;
	}
	&:hover {
		color: var(--color-orange);
		&:before {
			transform: scaleX(1);
		}
	}
`;

export function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			process.env.NEXT_PUBLIC_SERVICE_ID,
			process.env.NEXT_PUBLIC_TEMPLATE_ID,
			form.current,
			process.env.NEXT_PUBLIC_KEY
		);
		e.target.reset();
	};

	return (
		<ContactContainer>
			<Title content={CONTACT_TITLE} />
			<ContactSocialContainer>
				{Object.values(CONTACT_SOCIALS).map((contact, index) => (
					<IconContext.Provider key={index} value={{ color: "#ccc", size: "2.1rem" }}>
						<SocialLink href={contact.link}>{contact.icon}</SocialLink>
					</IconContext.Provider>
				))}
			</ContactSocialContainer>

			<ContactForm ref={form} onSubmit={sendEmail}>
				<YourInfo type="text" name="name" placeholder="Full Name" required />
				<YourInfo type="email" name="email" placeholder="Email" required />
				<MessageBox name="message" cols="30" rows="10" placeholder="Message" required></MessageBox>
				<SendButton type="submit">Send Message</SendButton>
			</ContactForm>
		</ContactContainer>
	);
}
