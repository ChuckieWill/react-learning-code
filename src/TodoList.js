import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import './TodoList.css'

class TodoList extends Component {
  constructor(props) {  //组件构造函数
    super(props)        //父组件：Component的构造函数
    this.state = {      //存储组件的数据
      inputValue: 'hello',
      list: [],
      show: true,
    }
    this.changeInputValue = this.changeInputValue.bind(this)
    this.submitInput = this.submitInput.bind(this)
    this.itemDel = this.itemDel.bind(this)
    this.textChange = this.textChange.bind(this)
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
      <Fragment> 
        <div>
          <CSSTransition
            in = {this.state.show}
            timeout  = {1000}
            classNames = 'fade'
            unmountOnExit
            onEntered = {(el) => {el.style.color = 'blue'}}
            appear = {true}
          >
            <h1>hello world</h1>
          </CSSTransition>
          <button onClick = {this.textChange}>change</button>
        </div>     
        <div>
          <label htmlFor="insert">输入内容</label> 
          <input value = {this.state.inputValue}   
                 onChange = {this.changeInputValue} 
                 id="insert" />
          <button onClick = {this.submitInput}>提交</button>
        </div>
        <ul>
          <TransitionGroup>
            { this.getTodoItem() }
          </TransitionGroup>
        </ul>
      </Fragment>
    )
  }

 

  getTodoItem() {
    return this.state.list.map((item, index) => {  
      return ( 
        <CSSTransition
            in = {this.state.show}
            timeout  = {1000}
            classNames = 'fade'
            unmountOnExit
            onEntered = {(el) => {el.style.color = 'blue'}}
            appear = {true}
          >
            <TodoItem key={index}
                content = {item}
                index = {index}
                itemDel = {this.itemDel}/>
          </CSSTransition>
      )
    })
  }

  textChange() {
    this.setState(() => ({
      show: this.state.show ? false : true
    }))
  }

  changeInputValue(e){
    const value = e.target.value
    // const value = this.input.value
    this.setState(() => ({
        inputValue: value
      }))
  }

  submitInput(){
    const {inputValue} = this.state
    if(inputValue === ''){
      return 
    }
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  itemDel(index){
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}

export default TodoList;