import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import Todo from 'Todo'

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('should call onToggle prop with id on click', () => {
    let todoData = {
      id: 111,
      text: 'test text',
      completed: true
    }

    let spy = expect.createSpy()
    let todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>)
    let $el = $(ReactDOM.findDOMNode(todo))

    ReactTestUtils.Simulate.click($el[0])

    expect(spy).toHaveBeenCalledWith(111)
  })
})
