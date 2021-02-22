import styled from 'styled-components'
import Label from '../../atoms/Label'
import Select from '../../atoms/Select'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 10px 0;
	width: 100%;
`

const SortSelect = () => (
	<Wrapper>
		<Label>Alfabeticamente</Label>
		<Select>
			<option>A - Z</option>
			<option>Z - A</option>
		</Select>
	</Wrapper>
)

export default SortSelect
