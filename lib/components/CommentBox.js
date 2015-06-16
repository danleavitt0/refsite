'use strict';

var React = require('react'),
    Radium = require('radium'),
    CommentList = require('lib/components/CommentList'),
    CommentInput = require('lib/components/CommentInput'),
    Firebase = require('firebase');

var CommentBox = React.createClass(Radium.wrap({
  componentDidMount: function componentDidMount() {
    var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/matches/' + this.props.id);
    fireBaseRef.on('value', (function (snapshot) {
      this.data = snapshot.val();
      this.setState({
        comments: this.data.comments || null
      });
    }).bind(this));
  },
  getInitialState: function getInitialState() {
    return {
      comments: null
    };
  },
  render: function render() {
    return React.createElement(
      'div',
      { style: [styles.commentBox, this.props.styles] },
      React.createElement(CommentList, { comments: this.state.comments }),
      React.createElement(CommentInput, { id: this.props.id })
    );
  }
}));

var styles = {
  commentBox: {
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#f5f5f5'
  }
};

module.exports = CommentBox;