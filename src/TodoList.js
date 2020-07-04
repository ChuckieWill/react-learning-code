import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {  //组件构造函数
    super(props)        //父组件：Component的构造函数
    this.state = {      //存储组件的数据
      inputValue: 'hello',
      list: []
    }
    this.changeInputValue = this.changeInputValue.bind(this)
    this.submitInput = this.submitInput.bind(this)
    this.itemDel = this.itemDel.bind(this)
  }

  render() {           // 组件的html --- JSX
    return (           // React组件的标签必须有一个根标签，可以是<div>,但是<div>会在DOM中渲染出来，为了不渲染，用<Fragment>来占位，起到跟标签的作用
      <Fragment>      
        <div>
          <label htmlFor="insert">输入内容</label> 
          <input value = {this.state.inputValue}   
                 onChange = {this.changeInputValue} 
                 id="insert" />
          <button onClick = {this.submitInput}>提交</button>
        </div>
        <ul>
            { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {  
      return ( 
      <TodoItem key={index}
                content = {item}
                index = {index}
                itemDel = {this.itemDel}/>
      )
    })
  }

  changeInputValue(e){
    const value = e.target.value
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