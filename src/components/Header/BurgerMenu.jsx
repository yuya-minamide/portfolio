import styled from "styled-components";

const BurgerMenuContainer = styled.div`
	@media screen and (max-width: 960px) {
		height: 100%;
		width: 3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		cursor: pointer;
		padding: 1rem;

		div {
			width: 3.5rem;
			height: 0.5rem;
			background-color: #fff;
			opacity: 0.6;
			border-radius: 0.3rem;

			&:nth-child(1) {
				transform: ${({ isMenuClicked }) =>
					isMenuClicked ? "rotate(45deg) translate(0.75em, 1.25em)" : "rotate(0) translate(0)"};
				transition: ${({ isMenuClicked }) =>
					isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;"};
			}
			&:nth-child(2) {
				transform: ${({ isMenuClicked }) => (isMenuClicked ? "scale(0.1)" : "rotate(0) translate(0)")};
				transition: ${({ isMenuClicked }) =>
					isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;"};
			}
			&:nth-child(3) {
				transform: ${({ isMenuClicked }) =>
					isMenuClicked ? "rotate(135deg) translate(-0.5em, 1em)" : "rotate(0) translate(0)"};
				transition: ${({ isMenuClicked }) =>
					isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;"};
			}
		}
	}
`;

const BurgerMenu = ({ isMenuClicked, onClick }) => {
	return (
		<BurgerMenuContainer isMenuClicked={isMenuClicked} onClick={onClick}>
			<div />
			<div />
			<div />
		</BurgerMenuContainer>
	);
};

export default BurgerMenu;
