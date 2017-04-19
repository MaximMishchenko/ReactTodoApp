import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import * as storeConfig from 'storeConfig'
import TodoApp from 'TodoApp'
import TodoList from 'TodoList'


describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('should render todo list', () => {
    let store = storeConfig.configure()
    let provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    )

    let todoApp = ReactTestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    let todoList = ReactTestUtils.scryRenderedComponentsWithType(todoApp, TodoList)

    expect(todoList.length).toEqual(1)
  })
})
