import styled from 'styled-components'
import { DARKPURPLE, LIGTHPURPLE, LAPTOP } from '../../constants'
import FilterIcon from '../../../assets/icons/filter.svg'
import Icon from '../../atoms/Icon'

const Wrapper = styled.button`
	width: 70px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${DARKPURPLE};
	position: fixed;
	z-index: 3;
	right: 30px;
	bottom: 10px;
	border: none;
	outline: none;
	-webkit-box-shadow: 0px 0px 5px 0px rgba(92, 92, 92, 1);
	-moz-box-shadow: 0px 0px 5px 0px rgba(92, 92, 92, 1);
	box-shadow: 0px 0px 5px 0px rgba(92, 92, 92, 1);
	cursor: pointer;

	&:hover,
	&:active {
		background-color: ${LIGTHPURPLE};
	}

	@media (min-width: ${LAPTOP}) {
		display: none;
	}
`
const FilterButton = () => (
	<Wrapper>
		<Icon src={FilterIcon} />
	</Wrapper>
)
export default FilterButton
