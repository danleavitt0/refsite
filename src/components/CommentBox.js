import React from 'react'
import Radium from 'radium'
import {CommentList, CommentInput} from 'lib/components'
import Firebase from 'firebase'

class CommentBox extends React.Component {

  constructor (props) {
    super(props)
    this.setState({
        comments:null
    })
  }

  componentDidMount () {
    var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/matches/'+this.props.id)
    fireBaseRef.on('value', function(snapshot){
      this.data = snapshot.val()
      this.setState({
        comments: this.data.comments || null
      })
    }.bind(this))
  }

  render () {
    return (
      <div style={[
        styles.commentBox,
        this.props.styles
      ]} >
        <CommentList comments={this.state.comments} />
        <CommentInput id={this.props.id} />
      </div>
    )
  }
}

var styles = {
  commentBox: {
    width:'100%',
    padding:'10px 0',
    backgroundColor:'#f5f5f5'
  }
}

module.exports = Radium(CommentBox)
