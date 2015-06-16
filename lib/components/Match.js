'use strict';

var React = require('react'),
    Radium = require('radium'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var Match = React.createClass(Radium.wrap({
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(RouteHandler, null)
		);
	}
}));

module.exports = Match;