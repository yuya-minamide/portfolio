import { BurgerMenuContainer } from "./BurgerMenu.styles";

export function BurgerMenu({ isMenuClicked, onClick }) {
	return (
		<BurgerMenuContainer isMenuClicked={isMenuClicked} onClick={onClick}>
			<div />
			<div />
			<div />
		</BurgerMenuContainer>
	);
}
