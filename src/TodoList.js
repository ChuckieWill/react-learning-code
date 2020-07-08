import React, {Component} from 'react'
import store from './store/index'
import { connect } from 'react-redux'
import {getTodoList, getInputChangeAction, getAddItemAction, getDelItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import './TodoList.css'
import 'antd/dist/antd.css'

class TodoList extends Component {
  // constructor(props) {  //组件构造函数
  //   super(props)        //父组件：Component的构造函
  //   this.props.changeInputValue = this.props.changeInputValue.bind(this)  //监听输入框的修改
  //   this.submitInput = this.submitInput.bind(this)  // 提交修改
  //   this.handleStoreChange = this.handleStoreChange.bind(this)  // 实时获取store中的数据
  //   this.onDel = this.onDel.bind(this)
  // }

  // componentDidMount() {
  //   axios.get('/api/todolist')
  //   .then(() => {
  //     alert('success')
  //   })
  //   .catch(() => {
  //     alert('error')
  //   })
  // }

  render() {           // 组件的html --- JSX
    const {inputValue, list, changeInputValue, submitInput, onDel} = this.props
    return (           // React组件的标签必须有一个根标签，可以是<div>,但是<div>会在DOM中渲染出来，为了不渲染，用<Fragment>来占位，起到跟标签的作用
      <TodoListUI
        inputValue = {inputValue}
        changeInputValue = {changeInputValue}
        submitInput = {submitInput}
        list = {list}
        onDel = {onDel}/>
    )
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }

  // changeInputValue(e){
  //   // const value = this.input.value
  //   const action = getInputChangeAction(e.target.value)
  //   store.dispatch(action)
  // }

 

  

  
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e){
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    onDel(index) {
      const action = getDelItemAction(index)
      dispatch(action)
    },
    submitInput(){
      const action = getAddItemAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);