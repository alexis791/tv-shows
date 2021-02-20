import React from 'react'
import styled from 'styled-components'
import { LAPTOP } from '../../constants/index'
import LinkButton from '../../atoms/LinkButton'

const NavWrapper = styled.nav`
	width: 40%;
	height: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	display: none;

	@media (min-width: ${LAPTOP}) {
		display: flex;
	}
`

const Navbar = () => (
	<NavWrapper>
		<LinkButton>Favoritos</LinkButton>
		<LinkButton>Mi lista</LinkButton>
	</NavWrapper>
)

export default Navbar
