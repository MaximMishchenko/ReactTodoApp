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
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  })

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }

    let todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(true)
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  })

  it('should toggle todo from completed to incompleted', () => {
    let todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    }

    let todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(true)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(false)
    expect(todoApp.state.todos[0].completedAt).toNotExist()
  })
})
