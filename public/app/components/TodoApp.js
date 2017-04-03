import React from 'react'
import uuid from 'node-uuid'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

class TodoApp extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the room'
        }
      ]
    }
  }

  handleAddTodo(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  render(){
    let {todos} = this.state

    return(
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoSearch onSearch={this.handleSearch.bind(this)}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
