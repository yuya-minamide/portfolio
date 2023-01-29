import Link from "next/link";
import styled from "styled-components";
import { TABLET, SMARTPHONE } from "@/constants";

const ButtonContainer = styled.div`
	margin-top: 50px;

	@media screen and (max-width: ${SMARTPHONE}) {
		margin-top: 30px;
	}
`;

const Button = styled(Link)`
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
		&:before {
			transform: scaleX(1);
		}
	}

	@media screen and (max-width: ${TABLET}) {
		font-size: 1rem;
		width: 180;
	}

	@media screen and (max-width: ${SMARTPHONE}) {
		font-size: 0.8rem;
		width: 140px;
	}
`;

export function CommonButton({ url, content }) {
	return (
		<ButtonContainer>
			<Button href={url} target="_blank">
				{content}
			</Button>
		</ButtonContainer>
	);
}
