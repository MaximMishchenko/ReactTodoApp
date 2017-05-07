import expect from 'expect'
import deepFreeze from 'deep-freeze-strict'
import { searchTextReducer, showCompletedReducer, todosReducer, authReducer } from 'reducers'

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			let action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'Dog'
			}

			let res = searchTextReducer(deepFreeze(''), deepFreeze(action))

			expect(res).toEqual(action.searchText)
		})
	})

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			let action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			}

			let res = showCompletedReducer(deepFreeze(false), deepFreeze(action))

			expect(res).toEqual(true)
		})
	})

	describe('todosReducer', () => {
		it('should add new todo', () => {
			let action = {
				type: 'ADD_TODO',
				todo: {
					id: 'asada',
					text: 'smth todo',
					completed: false,
					createdAt: 90890
				}
			}

			let res = todosReducer(deepFreeze([]), deepFreeze(action))

			expect(res.length).toEqual(1)
			expect(res[0]).toEqual(action.todo)
		})

		it('should update todo', () => {
			let todos = [
				{
					id: 2,
			        text: 'some other todo',
			        completed: true,
			        createdAt: 123,
			        completedAt: 125
				}
			]
			let updates = {
				completed: false,
				completedAt: null
			}
			let action = {
				type: 'UPDATE_TODO',
				id: todos[0].id,
				updates
			}

			let res = todosReducer(deepFreeze(todos), deepFreeze(action))

			expect(res[0].completedAt).toEqual(updates.completedAt)
			expect(res[0].completed).toEqual(updates.completed)
			expect(res[0].text).toEqual(todos[0].text)
		})

		it('should add existing todos', () => {
			let todos = [{
				id: 111,
				text: 'anything',
				completed: false,
				completedAt: undefined,
				createdAt: 330
			}]
			let action = {
				type: 'ADD_TODOS',
				todos
			}

			let res = todosReducer(deepFreeze([]), deepFreeze(action))

			expect(res.length).toEqual(1)
			expect(res[0]).toEqual(todos[0])
		})

		it('should wipe todos on logout', () => {
			let todos = [{
				id: 111,
				text: 'anything',
				completed: false,
				completedAt: undefined,
				createdAt: 330
			}]
			let action = {
				type: 'LOGOUT'
			}

			let res = todosReducer(deepFreeze(todos), deepFreeze(action))

			expect(res.length).toEqual(0)
		})
	})

	describe('authReducer', () => {
		it('should store uid on LOGIN', () => {
			const action = {
				type: 'LOGIN',
				uid: 'abc'
			}
			const res = authReducer(undefined, deepFreeze(action))

			expect(res).toEqual({
				uid: action.uid
			})
		})

		it('should wipe auth on LOGOUT', () => {
			const authData = {
				uid: 'abc'
			}
			const action = {
				type: 'LOGOUT'
			}
			const res = authReducer(deepFreeze(authData), deepFreeze(action))

			expect(res).toEqual({})
		})
	})
})

