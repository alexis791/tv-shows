import styled from 'styled-components'
import { DARKPURPLE, TABLET } from '../../constants/'

const Name = styled.h6`
	margin: 0;
	padding: 0;
	font-size: 1rem;
	font-weight: 700;
	color: ${DARKPURPLE};

	@media (min-width: ${TABLET}) {
		font-size: 1.2rem;
	}
`

export default Name
