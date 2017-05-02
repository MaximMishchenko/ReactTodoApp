import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import TodoApp from 'TodoApp'
import Login from 'Login'
import NotFound from 'NotFound'

import firebase from 'firebase'

let requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser) {
		replace('/')
	}
	next()
}

let redirectIfLoggedIn = (nextState, replace, next) => {
	if(firebase.auth().currentUser) {
		replace('/todos')
	}
	next()
}

export default (
    <Router history={browserHistory}>
		<Route path="/">
			<IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
			<Route path="todos" component={TodoApp} onEnter={requireLogin}/>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
)