import React from 'react'

class AddTodo extends React.Component {

  handleSubmit(event){
    event.preventDefault()
    let todoText = this.refs.todoText.value

    if(todoText.length > 0){
      this.refs.todoText.value = ''
      this.props.onAddTodo(todoText)
    } else {
      this.refs.todoText.focus()
    }
  }

  render(){
    let {id, text} = this.props

    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
