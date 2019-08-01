import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.hanleStoreChange = this.hanleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
    store.subscribe(this.hanleStoreChange)
  }

  render() {
    const { inputValue, list } = this.state
    return (
      <Fragment>
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input
            value={inputValue}
            placeholder="todo info"
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
          <List
            style={{width: '300px', marginTop: '10px'}}
            bordered
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleDelete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    )
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }

  hanleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  handleDelete(i) {
    const action = {
      type: 'delete_todo_item',
      value: i
    }
    store.dispatch(action)
  }
}

export default TodoList
