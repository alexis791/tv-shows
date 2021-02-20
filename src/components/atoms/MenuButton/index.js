import styled from 'styled-components'
import { WHITE, DARKPURPLE, LIGTHPURPLE } from '../../constants'

const MenuButton = styled.button`
	border: 2px solid ${WHITE};
	border-radius: 5px;
	border-color: ${WHITE};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: ${DARKPURPLE};
	cursor: pointer;
	outline: none;

	&:hover,
	&:active {
		background-color: ${LIGTHPURPLE};
	}

	@media (min-width: 779px) {
		display: none;
	}
`

export default MenuButton
