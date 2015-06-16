var React = require('react'),
    Radium = require('radium'),
    Firebase = require('firebase'),
    Input = require('lib/components/Input')

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
      <Input placeholder="Add a comment" update={this._handleUpdate}/>
    )
  },
  _handleUpdate: function (comment) {
    this.fireBaseRef.push(comment)
  }
}))

module.exports = CommentInput
