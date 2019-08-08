import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  const { inputValue, list, handleInputChange, handleBtnClick, handleDelete } = props
  return (
    <Fragment>
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input
          value={inputValue}
          placeholder="todo info"
          style={{width: '300px', marginRight: '10px'}}
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={handleBtnClick}>提交</Button>
        <List
          style={{width: '300px', marginTop: '10px'}}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {handleDelete(index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </Fragment>
  )
}

export default TodoListUI
