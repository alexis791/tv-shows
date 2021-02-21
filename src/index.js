import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import App from './App'
import Header from './components/organisms/Header'
import Dashboard from './views/Dashboard'

ReactDOM.render(
	<App>
		<Header />
		<Dashboard />
	</App>,
	document.getElementById('root')
)
