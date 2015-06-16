'use strict';

var React = require('react'),
    Radium = require('radium'),
    _ = require('lodash');

function getComment(el, idx) {
  return React.createElement(
    'div',
    { key: idx },
    React.createElement(
      'p',
      null,
      ' ',
      el,
      ' '
    )
  );
}

var CommentList = React.createClass(Radium.wrap({
  render: function render() {
    var comments = this.props.comments ? _.map(this.props.comments, getComment) : null;
    return React.createElement(
      'div',
      { style: [styles.base] },
      comments
    );
  }
}));

var styles = {
  base: {
    padding: 10,
    fontFamily: 'inherit'
  }
};

module.exports = CommentList;