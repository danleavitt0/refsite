'use strict';

var React = require('react'),
    Radium = require('radium');

var Title = React.createClass(Radium.wrap({
	getDefaultProps: function getDefaultProps() {
		return {
			label: ''
		};
	},
	render: function render() {
		return React.createElement(
			'h2',
			{
				style: [styles.base, this.props.style] },
			this.props.label
		);
	}
}));

var styles = {
	base: {
		display: 'flex',
		fontSize: 60,
		color: '#fff',
		margin: 0,
		fontWeight: 400,
		flex: 1,
		alignItems: 'center',
		fontFamily: 'Roboto, sans-serif'
	}
};

module.exports = Title;