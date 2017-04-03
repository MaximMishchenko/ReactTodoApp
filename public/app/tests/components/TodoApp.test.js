import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import TodoApp from 'TodoApp'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = 'test text'
    let todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>)

    todoApp.setState({todos: []})
    todoApp.handleAddTodo(todoText)

    expect(todoApp.state.todos[0].text).toBe(todoText)
  })
})
