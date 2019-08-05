import React, { Component } from 'react'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getListData } from './store/action'
import TodoListUI from './TodoListUI'
import axios from 'axios'
import 'antd/dist/antd.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.hanleStoreChange = this.hanleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    store.subscribe(this.hanleStoreChange)
  }

  render() {
    const { inputValue, list } = this.state
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDelete={this.handleDelete}
      />
    )
  }

  componentDidMount() {
    axios.get(' https://www.easy-mock.com/mock/5d47ce6fcf23b172c02d7ff0/JianShu/TodoList').then(res => {
      const data = res.data.data
      const action = getListData(data)
      store.dispatch(action)
    })
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  hanleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDelete(i) {
    const action = getDeleteItemAction(i)
    store.dispatch(action)
  }
}

export default TodoList
