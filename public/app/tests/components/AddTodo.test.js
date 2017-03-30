import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jquery'

import AddTodo from 'AddTodo'

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should call onAddTodo prop with valid data', () => {
    let spy = expect.createSpy()
    let addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = 'Check mail'
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith('Check mail')
  })

  it('should not call onAddTodo prop with invalid input', () => {
    let spy = expect.createSpy()
    let addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = ''
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
