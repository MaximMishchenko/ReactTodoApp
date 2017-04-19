import expect from 'expect'
import { setSearchText, addTodo, addTodos, toggleTodo, toggleShowCompleted } from 'actions'

describe('Actions', () => {
	it('should generate search text action', () => {
		let action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		}
		let res = setSearchText(action.searchText)

		expect(res).toEqual(action)
	})

	it('should generate add todo action', () => {
		let action = {
			type: 'ADD_TODO',
			text: 'Some todo text'
		}
		let res = addTodo(action.text)

		expect(res).toEqual(action)
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
		let res = addTodos(todos)

		expect(res).toEqual(action)
	})

	it('should generate toggle todo action', () => {
		let action = {
			type: 'TOGGLE_TODO',
			id: 1
		}
		let res = toggleTodo(action.id)

		expect(res).toEqual(action)
	})

	it('should generate toggle show completed action', () => {
		let action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		let res = toggleShowCompleted()

		expect(res).toEqual(action)
	})
})