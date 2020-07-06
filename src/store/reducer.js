import {CHANGE_INPUT_VALUE, ADD_TO_LIST, DEL_LIST} from './actionTypes'

const defaultState = {
  inputValue: '1232131',
  list: ['hdfahd', 'jdlfjald']
}

export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_TO_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DEL_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}