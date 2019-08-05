import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_DATA } from './types'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (i) => ({
  type: DELETE_TODO_ITEM,
  value: i
})

export const getListData = (data) => ({
  type: INIT_LIST_DATA,
  data
})
