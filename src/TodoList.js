import React, {Component, Fragment} from 'react'

class TodoList extends Component {
  constructor(props) {  //组件构造函数
    super(props)        //父组件：Component的构造函数
    this.state = {      //存储组件的数据
      inputValue: 'hello',
      list: []
    }
  }

  render() {           // 组件的html --- JSX
    return (           // React组件的标签必须有一个根标签，可以是<div>,但是<div>会在DOM中渲染出来，为了不渲染，用<Fragment>来占位，起到跟标签的作用
      <Fragment>      
        <div>
          <label htmlFor="insert">输入内容</label> 
          <input value = {this.state.inputValue}   
                 onChange = {this.changeInputValue.bind(this)} 
                 id="insert" />
          <button onClick = {this.submitInput.bind(this)}>提交</button>
        </div>
        <ul>
            {
              this.state.list.map((item, index) => {  
                return (
                <Fragment  key={index}>  
                <li key={index} 
                    dangerouslySetInnerHTML={{__html: item}}></li>
                <button onClick = {this.itemDel.bind(this, index)} key={index+1}>删除</button>
                </Fragment>
                )
              })
            }
        </ul>
      </Fragment>
    )
  }

  changeInputValue(e){
    this.setState({                   // 修改Reat组件中的数据 需要通过this.setState({})函数来修改
      inputValue: e.target.value
    })
  }

  submitInput(){
    if(this.state.inputValue === ''){
      return 
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  itemDel(index){
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList;