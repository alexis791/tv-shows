import styled from 'styled-components'
import { INDIGO, WHITE, LAPTOP } from '../../constants'

const LinkButton = styled.a`
	text-decoration: none;
	font-size: 1.25rem;
	width: 100%;
	height: 50px;
	font-weight: regular;
	color: ${WHITE};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover,
	&:active {
		color: ${INDIGO};
		background-color: ${WHITE};
	}

	/** change size and direction  */
	@media (min-width: ${LAPTOP}) {
		flex-direction: row;
		height: inherit;
		font-size: 0.9rem;
	}
`
export default LinkButton
