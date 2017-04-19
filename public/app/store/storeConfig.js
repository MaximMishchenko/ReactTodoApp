import { createStore, combineReducers, compose } from 'redux'
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers'

export let configure = (initialState = {}) => {
	let reducer = combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	})

	let store = createStore(reducer, initialState, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))

	return store
}