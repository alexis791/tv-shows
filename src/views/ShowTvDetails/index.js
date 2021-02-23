import React from 'react'
import styled from 'styled-components'
import { useRouteMatch as match, useParams as params } from 'react-router-dom'
import PosterImage from '../../components/molecules/PosterImage'
import Title from '../../components/atoms/Title'
import { LAPTOP, TABLET } from '../../components/constants'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 20px;

	@media (min-width: ${LAPTOP}) {
		flex-direction: row;
	}
`
const WrapperPoster = styled.div`
	flex: 1;
`

const WrapperDescription = styled.div`
	flex: 3;

	@media (min-width: ${LAPTOP}) {
		padding: 0 20px;
	}
`

const ShowTvDetails = () => {
	return (
		<div>
			<Title>Riverdale (2017)</Title>
			<Wrapper>
				<WrapperPoster>
					<PosterImage />
				</WrapperPoster>
				<WrapperDescription>
					<h3>Descripcion</h3>
					<p>
						Lorem Ipsum es simplemente el texto de relleno de las
						imprentas y archivos de texto. Lorem Ipsum ha sido el
						texto de relleno estándar de las industrias desde el año
						1500, cuando un impresor (N. del T. persona que se
						dedica a la imprenta) desconocido usó una galería de
						textos y los mezcló de tal manera que logró hacer un
						libro de textos especimen.
					</p>
					<h3>Género</h3>
					<p>Mystery, Drama, Crime 45m</p>
				</WrapperDescription>
			</Wrapper>
		</div>
	)
}

export default ShowTvDetails
