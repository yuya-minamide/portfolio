import { Button, ButtonContainer } from "./CommonButton.styles";

export function CommonButton({ url, content }) {
	return (
		<ButtonContainer>
			<Button href={url} target="_blank">
				{content}
			</Button>
		</ButtonContainer>
	);
}
