import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jquery'

import TodoSearch from 'TodoSearch'

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist()
  })

  it('should call onSearch with entered input text', () => {
    let searchText = 'dog'
    let spy = expect.createSpy()
    let todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

    todoSearch.refs.searchText.value = searchText
    ReactTestUtils.Simulate.change(todoSearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith(false, 'dog')
  })

  it('should call onSearch with proper checked value', () => {
    let spy = expect.createSpy()
    let todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

    todoSearch.refs.showCompleted.checked = true
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(true, '')
  })
})
