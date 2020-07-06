const defaultState = {
  inputValue: '1232131',
  list: ['hdfahd', 'jdlfjald']
}

export default (state = defaultState, action) => {
  console.log(state, action)
  if(action.type === 'change_input_value'){
    console.log('hhhh')
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}