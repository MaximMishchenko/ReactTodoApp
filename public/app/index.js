import React from 'react'
import { render } from 'react-dom'
import { Route, Router, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

//components
import TodoApp from 'TodoApp'
import NotFound from 'NotFound'

import { setSearchText, addTodo, toggleTodo, toggleShowCompleted } from 'actions'
import * as storeConfigure from 'storeConfig'

//load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'

//custom styles
import 'style-loader!css-loader!sass-loader!./styles/style.scss'

let store = storeConfigure.configure()

store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(addTodo('Clean'))
store.dispatch(toggleShowCompleted())

const app = document.getElementById('app')

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={TodoApp}/>
			<Route path="*" component={NotFound}/>
		</Router>
	</Provider>,
	app
	)
