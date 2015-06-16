'use strict';

var React = require('react'),
    Radium = require('radium'),
    mui = require('material-ui'),
    IconButton = mui.IconButton;

var ThumbDown = React.createClass(Radium.wrap({
	render: function render() {
		return React.createElement(
			IconButton,
			{ onClick: this._handleClick },
			React.createElement(
				'i',
				{ className: 'material-icons',
					style: [styles.base, this.props.style, this.props.active && styles.active] },
				'thumb_down'
			)
		);
	},
	_handleClick: function _handleClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.handleClick();
	}
}));

var styles = {
	base: {
		color: '#fff',
		transition: 'all .3s cubic-bezier(0.4,0,0.2,1)'
	},
	active: {
		color: '#00BCD4'
	}
};

module.exports = ThumbDown;