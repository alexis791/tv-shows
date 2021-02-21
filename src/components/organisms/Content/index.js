import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Content = () => (
	<Switch>
		<Route path='/populares'>
			<h1>Mas populares</h1>
		</Route>
		<Route path='/votados'>
			<h1>Mas votados</h1>
		</Route>
		<Route path='/vistos'>
			<h1>Mas vistos</h1>
		</Route>
		<Route path='/favoritos'>
			<h1>Favoritos</h1>
		</Route>
	</Switch>
)

export default Content
