import styled from 'styled-components'

const App = styled.section`
	min-width: 360px;
	max-width: 1900px;
	width: 100%;
	height: 100%;
	margin: 0 auto;

	/* Mobiles devices  */
	@media (min-width: 320px) {
		background-color: red;
		&::after {
			content: 'Mobiles devices';
		}
	}

	/** Ipads, tablets */
	@media (min-width: 480px) {
		background-color: blue;
		&::after {
			content: 'Ipads, tablets';
		}
	}

	/** Small screens, laptops */
	@media (min-width: 780px) {
		background-color: green;
		&::after {
			content: 'Smalls screens, laptops';
		}
	}

	/** Desktop and Large screens */
	@media (min-width: 1025px) {
		background-color: orange;
		&::after {
			content: 'Desktop and large screens';
		}
	}

	/** Extra large screens, TV */
	@media (min-width: 1200px) {
		background-color: yellowgreen;
		&::after {
			content: 'Extra large screens';
		}
	}
`

export default App
