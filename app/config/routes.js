import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Prompt from '../containers/PromptContainer'

let routes = (
	<Router history={hashHistory}>
		<Route component={Navbar}>
			<Route path='/' component={Home} />
			<Route path='/playerone' header="player one" component={Prompt} />
		</Route>
	</Router>
)

export default routes