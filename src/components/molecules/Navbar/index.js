import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../atoms/LinkButton'
import { LAPTOP, DESKTOP, TV } from '../../constants/index'

const NavWrapper = styled.nav`
	width: 40%;
	height: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	display: none;

	@media (min-width: ${LAPTOP}) {
		display: flex;
		width: 60%;
	}

	@media (min-width: ${DESKTOP}) {
		width: 50%;
	}

	@media (min-width: ${TV}) {
		width: 40%;
	}
`

const Navbar = () => (
	<NavWrapper>
		<LinkButton>Más Populares</LinkButton>
		<LinkButton>Más votados</LinkButton>
		<LinkButton>Más vistos</LinkButton>
		<LinkButton>Favoritos</LinkButton>
	</NavWrapper>
)

export default Navbar
