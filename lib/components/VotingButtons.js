'use strict';

var React = require('react'),
    Radium = require('radium'),
    ThumbUp = require('lib/components/ThumbUp'),
    ThumbDown = require('lib/components/ThumbDown');

var VotingButtons = React.createClass(Radium.wrap({
	getInitialState: function getInitialState() {
		return {
			up: false,
			down: false
		};
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(ThumbUp, { handleClick: this._handleUp, active: this.state.up, ref: 'up' }),
			React.createElement(ThumbDown, { handleClick: this._handleDown, active: this.state.down, ref: 'down' })
		);
	},
	_handleUp: function _handleUp() {
		var up = this.state.up ? false : true;
		this.setState({
			up: up,
			down: false
		});
	},
	_handleDown: function _handleDown() {
		var down = this.state.down ? false : true;
		this.setState({
			up: false,
			down: down
		});
	}
}));

module.exports = VotingButtons;