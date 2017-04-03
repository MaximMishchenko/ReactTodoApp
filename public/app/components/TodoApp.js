import React from 'react'
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

  handleAddTodo(todoText){
    alert('new todo' + todoText)
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
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
