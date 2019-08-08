import { put, takeEvery } from 'redux-saga/effects'
import { getInitList } from './action'
import { INIT_LIST_DATA } from './types'
import axios from 'axios'

function* getTodoList() {
  const res = yield axios.get('https://www.easy-mock.com/mock/5d47ce6fcf23b172c02d7ff0/JianShu/TodoList')
  const action = getInitList(res.data.data)
  yield put(action)
}

function* mySaga() {
  yield takeEvery(INIT_LIST_DATA, getTodoList)
}

export default mySaga
