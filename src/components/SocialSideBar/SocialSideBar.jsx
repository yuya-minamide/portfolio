import styled from "styled-components";
import { SocialIcon } from "../index";
import { TABLET } from "@/constants";

const SideBarContainer = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	gap: 0.8rem;
	height: 97vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	margin-left: 20px;

	&:before {
		content: "";
		width: 1px;
		height: 4rem;
		background: var(--color-white);
	}

	&:after {
		content: "";
		width: 1px;
		height: 4rem;
		background: var(--color-white);
	}

	@media screen and (max-width: ${TABLET}) {
		display: none;
	}
`;

export function SocialSideBar() {
	return (
		<SideBarContainer>
			<SocialIcon />
		</SideBarContainer>
	);
}
