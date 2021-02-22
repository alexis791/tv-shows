import styled from 'styled-components'
import { LAPTOP } from '../../components/constants'
import Title from '../../components/atoms/Title'
import TvShow from '../../components/organisms/TvShow'
import Shows from '../../components/organisms/Shows'

const Wrapper = styled.section`
	width: inherit;
	height: inherit;

	@media (min-width: ${LAPTOP}) {
		padding-left: 20px;
	}
`

const MostPopular = () => (
	<Wrapper>
		<Title>Más populares</Title>
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

export default MostPopular
