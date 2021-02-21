import styled from 'styled-components'
import Poster from '../../atoms/Poster'

const Wrapper = styled.div`
	border-radius: 5px;
	width: 100%;
`

const PosterImage = () => (
	<Wrapper>
		<Poster src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bmemsraCG1kIthY74NjDnnLRT2Q.jpg' />
	</Wrapper>
)

export default PosterImage
