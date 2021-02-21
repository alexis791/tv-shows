import styled from 'styled-components'
import { Route } from 'react-router-dom'
import Title from '../../components/atoms/Title'
import TvShow from '../../components/organisms/TvShow'
import Shows from '../../components/organisms/Shows'

const Wrapper = styled.section`
	width: inherit;
	height: inherit;
`

const MostVoted = () => (
	<Wrapper>
		<Title>Más votadas</Title>
		<Shows>
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
			<TvShow />
		</Shows>
	</Wrapper>
)

export default MostVoted
