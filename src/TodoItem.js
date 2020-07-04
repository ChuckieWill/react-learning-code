import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.itemDel = this.itemDel.bind(this)
  }

  render() {
    const { content, text } = this.props 
    return (
      <div>
        {text}-{content}
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
  text : PropTypes.string.isRequired,
  content : PropTypes.string,
  itemDel : PropTypes.func,
  index : PropTypes.number
}

TodoItem.defaultProps = {
  text: 'hello word'
}

export default TodoItem