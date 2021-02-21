import styled from 'styled-components'
import { TABLET } from '../../constants'

const Rate = styled.p`
	font-size: 1rem;
	color: gray;
	display: none;

	@media (min-width: ${TABLET}) {
		display: block;
	}
`

export default Rate
