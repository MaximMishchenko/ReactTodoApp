import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

export class AddTodo extends React.Component {

  handleSubmit(event){
    event.preventDefault()
    let {dispatch} = this.props
    let todoText = this.refs.todoText.value

    if(todoText.length > 0){
      this.refs.todoText.value = ''
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todoText.focus()
    }
  }

  render(){
    let {id, text} = this.props

    return(
      <div className="container__footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
