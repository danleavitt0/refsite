var React = require('react'),
    Radium = require('radium'),
    Firebase = require('firebase'),
    Input = require('./Input.jsx')
    
var CommentInput = React.createClass(Radium.wrap({
  getInitialState: function () {
    return ({
      value:''
    })
  },
  componentDidMount: function () {
    this.fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/matches/'+this.props.id+'/comments')
  },
  render: function () {
    return (
      <Input placeholder="Add a comment" value={this.state.value} onChange={this._handleInput} onKeyDown={this._handleKeyDown} />
    )
  },
  _handleInput: function(e) {
    this.setState({
      value: e.target.value
    })
  },
  _handleKeyDown: function (e) {
    if(e.keyCode === 13){
      this.fireBaseRef.push(this.state.value)
    }
  }
}))    
    
module.exports = CommentInput