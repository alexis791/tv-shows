import React from 'react'
import styled from 'styled-components'
import PosterImage from '../../molecules/PosterImage'
import PosterContent from '../../molecules/PosterContent'
import { TABLET, LAPTOP, DESKTOP, TV } from '../../constants'
import { NavLink } from 'react-router-dom'

const Wrapper = styled(NavLink)`
	width: 40%;
	border-radius: 5px;
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	overflow: hidden;
	margin: 10px;
	cursor: pointer;
	text-decoration: none;

	@media (min-width: ${TABLET}) {
		width: 30%;
	}

	@media (min-width: ${LAPTOP}) {
		width: 25%;
	}

	@media (min-width: ${DESKTOP}) {
		width: 20%;
	}

	@media (min-width: ${TV}) {
		width: 15%;
	}
`

const TvShow = ({ to }) => (
	<Wrapper to={to}>
		<PosterImage />
		<PosterContent />
	</Wrapper>
)

export default TvShow
