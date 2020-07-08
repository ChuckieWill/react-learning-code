import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { GET_TODOLIST } from './actionTypes'
import { getAddItemAxios } from './actionCreators'

function* getTodolist() {
  const res = yield axios.get('http://152.136.185.210:8000/api/n3/home/multidata')
  const item = res.data.data.banner.list[0].acm
  const action = getAddItemAxios(item)
  yield put(action)
}

function* mySaga() {
  yield takeEvery(GET_TODOLIST, getTodolist);
}

export default mySaga;