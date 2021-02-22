import React from 'react'
import styled from 'styled-components'
import { LAPTOP } from '../../constants'
import FilterButton from '../../molecules/FilterButton'
import PunctuationFilter from '../../molecules/PunctuationFilter'
import SortSelect from '../../molecules/SortSelect'
import Title from '../../atoms/Title'

const Container = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	@media (min-width: ${LAPTOP}) {
		flex-direction: column;
	}
`

const Wrapper = styled.div`
	position: fixed;
	background: white;
	left: 0;
	right: 0;
	top: 0;

	@media (min-width: ${LAPTOP}) {
		display: block;
		position: relative;
	}
`

const Aside = () => (
	<Wrapper>
		<Title>Ordenar</Title>
		<Container>
			<SortSelect />
			<PunctuationFilter />
		</Container>
		<FilterButton />
	</Wrapper>
)

export default Aside
