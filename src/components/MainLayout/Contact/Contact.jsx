import { CONTACT_SOCIALS, CONTACT_TITLE } from "@/constants";
import { ContactContainer, ContactForm, ContactSocialContainer, MessageBox, SendButton, SocialLink, YourInfo } from "./Contact.styles";
import emailjs from "emailjs-com";
import { Title } from "../../index";
import { IconContext } from "react-icons";
import { useRef } from "react";

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
		<ContactContainer id="contact">
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
