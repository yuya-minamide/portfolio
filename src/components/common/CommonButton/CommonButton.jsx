import Link from "next/link";
import styled from "styled-components";

const ButtonContainer = styled.div`
	margin-top: 50px;

	@media screen and (max-width: 520px) {
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
	width: 18%;
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

	@media screen and (max-width: 960px) {
		font-size: 1rem;
		width: 30%;
	}

	@media screen and (max-width: 520px) {
		font-size: 0.8rem;
		width: 35%;
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
