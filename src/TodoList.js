import React, {Component} from 'react'
import store from './store/index'
import axios from 'axios'
import {getInputChangeAction, getAddItemAction, getDelItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import './TodoList.css'
import 'antd/dist/antd.css'

class TodoList extends Component {
  constructor(props) {  //组件构造函数
    super(props)        //父组件：Component的构造函
    this.changeInputValue = this.changeInputValue.bind(this)  //监听输入框的修改
    this.submitInput = this.submitInput.bind(this)  // 提交修改
    this.handleStoreChange = this.handleStoreChange.bind(this)  // 实时获取store中的数据
    this.onDel = this.onDel.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

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
    return (           // React组件的标签必须有一个根标签，可以是<div>,但是<div>会在DOM中渲染出来，为了不渲染，用<Fragment>来占位，起到跟标签的作用
      <TodoListUI
        inputValue = {this.state.inputValue}
        changeInputValue = {this.changeInputValue}
        submitInput = {this.submitInput}
        list = {this.state.list}
        onDel = {this.onDel}/>
    )
  }

  componentDidMount() {
    axios.get('http://152.136.185.210:8000/api/n3/home/multidata').then((res) => {
      console.log(res)
    })
  }

  changeInputValue(e){
    // const value = this.input.value
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  submitInput(){
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  onDel(index) {
    const action = getDelItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;