import React, {Fragment} from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <Fragment> 
      <div style={{margin: '10px'}}>
        <Input placeholder="Todo List" 
                style={{width: '300px', marginRight: '10px'}}
                value = {props.inputValue}
                onChange = {props.changeInputValue}/>
        <Button type="primary" onClick = {props.submitInput}>提交</Button>
        <div style={{margin: '10px 10px 10px 0 ', width: '370px'}}>
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) =>  <List.Item onClick = {props.onDel.bind(index)}>{item}</List.Item>  }
          />
        </div>
      </div> 
    </Fragment>
  )
}

export default TodoListUI