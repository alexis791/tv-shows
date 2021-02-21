import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import MostPopular from '../../../views/MostPopular'
import MostViewed from '../../../views/MostViewed'
import MostVoted from '../../../views/MostVoted'
import { MAX_WIDTH } from '../../constants'

const Wrapper = styled.section`
	background-color: white;
	padding: 20px;
	max-width: ${MAX_WIDTH};
	margin: 0 auto;
`

const Content = () => (
	<Wrapper>
		<Switch>
			<Route exact path='/'>
				<MostPopular />
			</Route>
			<Route exact path='/votadas'>
				<MostVoted />
			</Route>
			<Route exact path='/vistas'>
				<MostViewed />
			</Route>
		</Switch>
	</Wrapper>
)

export default Content
