var React = require('react'),
    Radium = require('radium'),
    CommentList = require('./CommentList.jsx'),
    CommentInput = require('./CommentInput.jsx'),
    Firebase = require('firebase')

var CommentBox = React.createClass(Radium.wrap({
  componentDidMount: function () {
    var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/matches/'+this.props.id)
    fireBaseRef.on('value', function(snapshot){
      this.data = snapshot.val()
      console.log(this.data)
      this.setState({
        comments: this.data.comments || null
      })
    }.bind(this))
  },
  getInitialState: function () {
    return ({
      comments:null
    })
  },
  render: function () {
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
}))

var styles = {
  commentBox: {
    width:'100%',
    height:40,
    backgroundColor:'#f5f5f5'
  }
}

module.exports = CommentBox