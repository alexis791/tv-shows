import styled from 'styled-components'
import Name from '../../atoms/Name'
import Rate from '../../atoms/Rate'

const Wrapper = styled.div`
	padding: 10px;
`

const PosterContent = () => (
	<Wrapper>
		<Name>I Am Not an Animal</Name>
		<Rate>Puntuación: 89.36</Rate>
	</Wrapper>
)

export default PosterContent
