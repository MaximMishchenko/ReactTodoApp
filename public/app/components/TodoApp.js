import React from 'react'
import TodoList from 'TodoList'

class TodoApp extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the room'
        }
      ]
    }
  }

  render(){
    let {todos} = this.state

    return(
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoList todos={todos}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
