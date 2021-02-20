import styled from 'styled-components'
import { INDIGO, WHITE } from '../../constants'

const LinkButton = styled.a`
	text-decoration: none;
	font-size: 1.25rem;
	width: 200px;
	height: 100%;
	font-weight: regular;
	color: ${WHITE};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover,
	&:active {
		color: ${INDIGO};
		background-color: ${WHITE};
	}
`
export default LinkButton
