import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { MAX_WIDTH } from '../../constants'
import { LAPTOP } from '../../constants'
import MostPopular from '../../../views/MostPopular'
import MostViewed from '../../../views/MostViewed'
import MostVoted from '../../../views/MostVoted'
import Aside from '../../organisms/Aside'

const Wrapper = styled.section`
	background-color: white;
	padding: 20px;
	max-width: ${MAX_WIDTH};
	margin: 0 auto;

	@media (min-width: ${LAPTOP}) {
		display: flex;
	}
`

const Content = () => (
	<Wrapper>
		<Aside />
		<div>
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
		</div>
	</Wrapper>
)

export default Content
