import Link from "next/link";
import { IconContext } from "react-icons";

const SocialIcon = ({ url, children }) => {
	return (
		<div>
			<IconContext.Provider value={{ color: "#ccc", size: "2.1rem" }}>
				<Link href={url} target="_blank" rel="noreferrer">
					{children}
				</Link>
			</IconContext.Provider>
		</div>
	);
};

export default SocialIcon;
