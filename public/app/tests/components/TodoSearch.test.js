import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jquery'

import { TodoSearch } from 'TodoSearch'

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist()
  })

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    let searchText = 'dog'
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    let spy = expect.createSpy()
    let todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)

    todoSearch.refs.searchText.value = searchText
    ReactTestUtils.Simulate.change(todoSearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let spy = expect.createSpy()
    let todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)

    todoSearch.refs.showCompleted.checked = true
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(action)
  })
})
