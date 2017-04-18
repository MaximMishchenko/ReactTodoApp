import expect from 'expect'
import deepFreeze from 'deep-freeze-strict'
import { searchTextReducer, showCompletedReducer } from 'reducers'

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
})