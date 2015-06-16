'use strict';

var React = require('react'),
    Radium = require('radium');

var MatchNotFound = React.createClass(Radium.wrap({
	render: function render() {
		return React.createElement(
			'div',
			null,
			' Match is not found '
		);
	}
}));

module.exports = MatchNotFound;