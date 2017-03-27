import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import TodoList from 'TodoList'
import Todo from 'Todo'

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one Todo component for each todo item', () => {
    let todos = [
      {
        id: 1,
        text: 'do smth'
      },
      {
        id: 2,
        text: 'do smth'
      },
    ]

    let todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    let todosComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todosComponents.length).toBe(todos.length)
  })
})
