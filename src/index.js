import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import App from './App'
import Header from './components/organisms/Header'
import Content from './components/organisms/Content'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<App>
		<Router>
			<Header />
			<Content />
		</Router>
	</App>,
	document.getElementById('root')
)
