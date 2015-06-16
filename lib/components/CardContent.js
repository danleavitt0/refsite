'use strict';

var React = require('react'),
    Radium = require('radium');

var CardContent = React.createClass(Radium.wrap({

	render: function render() {
		return React.createElement(
			'div',
			{ style: [styles.content, this.props.style] },
			this.props.children
		);
	}
}));

var styles = {
	content: {
		padding: 10
	}
};

module.exports = CardContent;