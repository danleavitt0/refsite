'use strict';

var React = require('react'),
    Radium = require('radium'),
    Firebase = require('firebase'),
    Input = require('lib/components/Input');

var CommentInput = React.createClass(Radium.wrap({
  getInitialState: function getInitialState() {
    return {
      value: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this.fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/matches/' + this.props.id + '/comments');
  },
  render: function render() {
    return React.createElement(Input, { placeholder: 'Add a comment', update: this._handleUpdate });
  },
  _handleUpdate: function _handleUpdate(comment) {
    this.fireBaseRef.push(comment);
  }
}));

module.exports = CommentInput;