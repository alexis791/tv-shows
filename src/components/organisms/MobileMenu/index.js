import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../atoms/LinkButton'
import { INDIGO, LAPTOP } from '../../constants'

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${INDIGO};
	position: absolute;
	right: -100%;
	z-index: 1;

	@media (min-width: ${LAPTOP}) {
		display: none;
	}
`

const MobileMenu = () => (
	<Wrapper>
		<LinkButton to='/populares'>Más Populares</LinkButton>
		<LinkButton to='/votados'>Más votados</LinkButton>
		<LinkButton to='/vistos'>Más vistos</LinkButton>
		<LinkButton to='/favoritos'>Favoritos</LinkButton>
	</Wrapper>
)

export default MobileMenu
