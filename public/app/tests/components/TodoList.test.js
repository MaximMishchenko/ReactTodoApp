import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import { configure } from 'storeConfig'
import ConnectedTodoList, { TodoList } from 'TodoList'
import ConnectedTodo, { Todo } from 'Todo'

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one Todo component for each todo item', () => {
    let todos = [
      {
        id: 1,
        text: 'do smth',
        completed: false,
        completedAt: undefined,
        createdAt: 100
      },
      {
        id: 2,
        text: 'do smth',
        completedAt: undefined,
        createdAt: 100
      },
    ]

    let store = configure({
      todos
    })
    let provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    )

    let todoList = ReactTestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
    let todosComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo)

    expect(todosComponents.length).toBe(todos.length)
  })

  it('should render empty message if no todos', () => {
    let todos = []
    let todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    let $el = $(ReactDOM.findDOMNode(todoList))


    expect($el.find('.container__message').length).toBe(1)
  })
})
