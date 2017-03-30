import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

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

  handleAddTodo(){
    alert('new todo')
  }

  render(){
    let {todos} = this.state

    return(
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
