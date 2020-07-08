import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.itemDel = this.itemDel.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content){
      return true
    }else{
      return false
    }
  }

  render() {
    console.log('hhhhhh')
    const { content } = this.props 
    return (
      <div>{content}
        <button onClick = {this.itemDel} >删除</button>
      </div>
    )
  }

  itemDel() {
    const {itemDel, index} = this.props
    itemDel(index)
  }
}

TodoItem.propTypes = {
  content : PropTypes.string,
  itemDel : PropTypes.func,
  index : PropTypes.number
}

// TodoItem.defaultProps = {
//   text: 'hello word'
// }

export default TodoItem