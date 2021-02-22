import React from 'react'
import styled from 'styled-components'
import Input from '../../atoms/Checkbox'
import Label from '../../atoms/Label'

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`
const PunctuationFilter = () => (
	<Wrapper>
		<Input name='punctuation' type='checkbox' />
		<Label htmlFor='punctuation'>Punctuación</Label>
	</Wrapper>
)

export default PunctuationFilter
