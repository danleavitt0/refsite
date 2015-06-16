'use strict';

var React = require('react'),
    Radium = require('radium'),
    Teams = require('../../../Teams.json');

var MatchHeadingHome = React.createClass(Radium.wrap({
	render: function render() {
		return React.createElement(
			'div',
			{ style: [styles.div, this.props.style] },
			React.createElement('img', { style: [styles.img], src: Teams[this.props.content]['logo-url'] }),
			React.createElement(
				'h3',
				{ style: [styles.title] },
				' ',
				Teams[this.props.content].name,
				' '
			)
		);
	}
}));

var styles = {
	div: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		flex: 1
	},
	img: {
		height: 120,
		width: 120
	},
	title: {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: 800,
		margin: 0,
		textShadow: '1px 1px rgba(0,0,0,0.2)',
		fontSize: 40,
		fontSmoothing: 'antialiased'
	}
};

module.exports = MatchHeadingHome;