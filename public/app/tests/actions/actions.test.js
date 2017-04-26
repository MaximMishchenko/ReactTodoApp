import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import firebase, { firebaseRef } from 'firebaseConfig'
import * as actions from 'actions'

let createMockStore = configureMockStore([thunk])

describe('Actions', () => {
	it('should generate search text action', () => {
		let action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		}
		let res = actions.setSearchText(action.searchText)

		expect(res).toEqual(action)
	})

	it('should generate add todo action', () => {
		let action = {
			type: 'ADD_TODO',
			todo: {
				id: 'asada',
				text: 'smth todo',
				completed: false,
				createdAt: 90890
			}
		}
		let res = actions.addTodo(action.todo)

		expect(res).toEqual(action)
	})

	it('should create todo and dispatch ADD_TODO', (done) => {
		const store = createMockStore({})
		const todoText = 'My todo item'

		store.dispatch(actions.startAddTodo(todoText)).then(() => {
			const actions = store.getActions()

			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			})

			expect(actions[0].todo).toInclude({
				text: todoText
			})
			done()
		}).catch(done)
	})

	it('should generate ADD_TODOS action', () => {
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
		let res = actions.addTodos(todos)

		expect(res).toEqual(action)
	})

	it('should generate update todo action', () => {
		let action = {
			type: 'UPDATE_TODO',
			id: 1,
			updates: {
				completed: false
			}
		}
		let res = actions.updateTodo(action.id, action.updates)

		expect(res).toEqual(action)
	})

	it('should generate toggle show completed action', () => {
		let action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		let res = actions.toggleShowCompleted()

		expect(res).toEqual(action)
	})

	describe('Tests with firebase todos', () => {
		let testTodoRef

		beforeEach((done) => {
			testTodoRef = firebaseRef.child('todos').push()

			testTodoRef.set({
				text: 'smth todo',
				completed: false,
				completedAt: 21425
			}).then(() => done())
		})

		afterEach((done) => {
			testTodoRef.remove().then(() => done())
		})

		it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
			const store = createMockStore({})
			const action = actions.startToggleTodo(testTodoRef.key, true)

			store.dispatch(action).then(() => {
				const mockActions = store.getActions()

				expect(mockActions[0]).toInclude({
					type: 'UPDATE_TODO',
					id: testTodoRef.key
				})
				expect(mockActions[0].updates).toInclude({
					completed: true
				})
				expect(mockActions[0].updates.completedAt).toExist()
				
				done()
			}, done)
		})
	})
})