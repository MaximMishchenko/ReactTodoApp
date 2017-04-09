import React from 'react'
import uuid from 'node-uuid'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import TodoAPI from 'TodoAPI'

class TodoApp extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  }

  componentDidUpdate(){
    TodoAPI.setTodos(this.state.todos)
  }

  handleAddTodo(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
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

  handleToggle(id){
    let updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState({
      todos: updatedTodos
    })
  }

  render(){
    let {todos, showCompleted, searchText} = this.state
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

    return(
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoSearch onSearch={this.handleSearch.bind(this)}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)}/>
            <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
