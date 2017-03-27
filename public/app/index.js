import React from 'react'
import { render } from 'react-dom'
import { Route, Router, IndexRoute, browserHistory, hashHistory } from 'react-router'

//components
import TodoApp from 'TodoApp'
import NotFound from 'NotFound'

//load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'

//custom styles
import 'style-loader!css-loader!sass-loader!./styles/style.scss'

const app = document.getElementById('app')

render(
	<Router history={browserHistory}>
		<Route path="/" component={TodoApp}>

		</Route>
		<Route path="*" component={NotFound} />
	</Router>,
	app
	)
