import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import * as actions from 'actions'
import { configure } from 'storeConfig'
import firebase from 'firebase'
import router from 'routes'

firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		browserHistory.push('/todos')
	} else {
		browserHistory.push('/')
	}
})

//load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'

//custom styles
import 'style-loader!css-loader!sass-loader!./styles/style.scss'

let store = configure()

store.dispatch(actions.startAddTodos())

const app = document.getElementById('app')



render(
	<Provider store={store}>
		{router}
	</Provider>,
	app
	)
