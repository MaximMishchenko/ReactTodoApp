import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jquery'

import * as actions from 'actions'
import { AddTodo } from 'AddTodo'

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should dispatch ADD_TODO when valid todo text', () => {
    let todoText = 'Check mail'
    let action = actions.startAddTodo(todoText)
    let spy = expect.createSpy()
    let addTodo = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = 'Check mail'
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    let spy = expect.createSpy()
    let addTodo = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = ''
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
