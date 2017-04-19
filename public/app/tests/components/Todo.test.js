import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import { Todo } from 'Todo'

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('should dispatch toggleTodo action on click', () => {
    let todoData = {
      id: 111,
      text: 'test text',
      completed: true
    }

    let spy = expect.createSpy()
    let todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(todo))

    ReactTestUtils.Simulate.click($el[0])

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    })
  })
})
