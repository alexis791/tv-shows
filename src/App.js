import styled from 'styled-components'
import { MOBILE, TABLET, LAPTOP, DESKTOP, TV } from './components/constants'

const App = styled.section`
	min-width: 360px;
	max-width: 1900px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	font-family: 'Roboto';

	/* Mobiles devices  */
	@media (min-width: ${MOBILE}) {
		background-color: red;
		&::after {
			content: 'Mobiles devices';
		}
	}

	/** Ipads, tablets */
	@media (min-width: ${TABLET}) {
		background-color: blue;
		&::after {
			content: 'Ipads, tablets';
		}
	}

	/** Small screens, laptops */
	@media (min-width: ${LAPTOP}) {
		background-color: green;
		&::after {
			content: 'Smalls screens, laptops';
		}
	}

	/** Desktop and Large screens */
	@media (min-width: ${DESKTOP}) {
		background-color: orange;
		&::after {
			content: 'Desktop and large screens';
		}
	}

	/** Extra large screens, TV */
	@media (min-width: ${TV}) {
		background-color: yellowgreen;
		&::after {
			content: 'Extra large screens';
		}
	}
`

export default App
