import React from 'react'
import Radium from 'radium'
import Firebase from 'firebase'
import {Input} from 'lib/components'

class CommentInput extends React.Component{

  constructor (props) {
    super(props)
    this.setState({
      value:''
    })
  }

  componentDidMount () {
    this.fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/matches/'+this.props.id+'/comments')
  }

  render () {
    return (
      <Input placeholder="Add a comment" update={this._handleUpdate.bind(this)}/>
    )
  }

  _handleUpdate (comment) {
    this.fireBaseRef.push(comment)
  }
}

module.exports = CommentInput
