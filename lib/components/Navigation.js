'use strict';

var React = require('react'),
    CircleButton = require('lib/components/CircleButton'),
    Radium = require('radium');

var Navigation = React.createClass(Radium.wrap({
	render: function render() {
		var buttons = [];
		for (var i = 0; i < 3; i++) {
			var active = this.props.active === i ? true : false;
			buttons.push(React.createElement(CircleButton, { key: i, active: active, position: i }));
		}
		return React.createElement(
			'div',
			{ style: [styles.div, this.props.style] },
			buttons
		);
	}
}));

var styles = {
	div: {
		display: 'flex',
		width: 120,
		height: 15,
		justifyContent: 'space-between',
		position: 'relative',
		top: '90%',
		margin: '0 auto'
	}
};

module.exports = Navigation;