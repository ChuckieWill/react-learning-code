import {GET_TODOLIST,ADD_TO_LISTUP, CHANGE_INPUT_VALUE, ADD_TO_LIST, DEL_LIST} from './actionTypes'


export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TO_LIST
})

export const getDelItemAction = (index) => ({
  type: DEL_LIST,
  index
})

export const getAddItemAxios = (item) => ({
  type: ADD_TO_LISTUP,
  item
})

export const getTodoList = () => ({
  type: GET_TODOLIST,
})