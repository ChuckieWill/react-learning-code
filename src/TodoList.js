import React, {Component, Fragment} from 'react'
import { Input, Button, List } from 'antd'
import store from './store/index'

import './TodoList.css'
import 'antd/dist/antd.css'

class TodoList extends Component {
  constructor(props) {  //组件构造函数
    super(props)        //父组件：Component的构造函
    this.changeInputValue = this.changeInputValue.bind(this)  //监听输入框的修改
    this.submitInput = this.submitInput.bind(this)  // 提交修改
    this.state = store.getState()
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
        <div style={{margin: '10px'}}>
          <Input placeholder="Todo List" 
                  style={{width: '300px', marginRight: '10px'}}
                  value = {this.state.inputValue}
                  onChange = {this.changeInputValue}/>
          <Button type="primary" onClick = {this.submitInput}>提交</Button>
          <div style={{margin: '10px 10px 10px 0 ', width: '370px'}}>
            <List
              bordered
              dataSource={this.state.list}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </div>
        </div> 
      </Fragment>
    )
  }

  changeInputValue(e){
    // const value = this.input.value
    console.log(e.target.value)
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
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


}

export default TodoList;