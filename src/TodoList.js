import React, { Component, Fragment } from 'react'
import './index.css'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div key={index}>
                  <TodoItem
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                  />
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleButtonClick() {
    const { list, inputValue } = this.state
    this.setState({
      list: [...list, inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(i) {
    const list = [...this.state.list]
    list.splice(i, 1)
    this.setState({
      list
    })
  }
}

export default TodoList
