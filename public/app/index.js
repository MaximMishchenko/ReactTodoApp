import React from 'react'
import { render } from 'react-dom'
import { Route, Router, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

//components
import TodoApp from 'TodoApp'
import Login from 'Login'
import NotFound from 'NotFound'

import * as actions from 'actions'
import { configure } from 'storeConfig'
import TodoAPI from 'TodoAPI'

//load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'

//custom styles
import 'style-loader!css-loader!sass-loader!./styles/style.scss'

let store = configure()

store.dispatch(actions.startAddTodos())

const app = document.getElementById('app')

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/">
				<IndexRoute component={Login}/>
				<Route path="todos" component={TodoApp}/>
				<Route path="*" component={NotFound}/>
			</Route>
		</Router>
	</Provider>,
	app
	)
