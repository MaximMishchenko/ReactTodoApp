import React from 'react'

class TodoSearch extends React.Component {

  handleSearch(){
    let showCompleted = this.refs.showCompleted.checked
    let searchText = this.refs.searchText.value

    this.props.onSearch(showCompleted, searchText)
  }

  render(){
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch.bind(this)}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)}/>
            Show completes todos
          </label>
        </div>
      </div>
    )
  }
}

export default TodoSearch