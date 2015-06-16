'use strict';

var React = require('react'),
    CircleFill = require('lib/components/CircleFill'),
    CarouselActions = require('lib/actions/CarouselActions');

var CircleButton = React.createClass({
	displayName: 'CircleButton',

	getInitialState: function getInitialState() {
		return {
			hover: false
		};
	},
	getDefaultProps: function getDefaultProps() {
		return {
			active: false
		};
	},
	render: function render() {
		return React.createElement(
			'div',
			{
				style: styles.circle,
				onMouseOver: this._handleMouseOver,
				onMouseOut: this._handleMouseOut,
				onClick: this._handleClick
			},
			React.createElement(CircleFill, { active: this.props.active, hover: this.state.hover })
		);
	},
	_handleClick: function _handleClick() {
		CarouselActions.change(this.props.position);
		this.setState({
			hover: false
		});
	},
	_handleMouseOver: function _handleMouseOver(e) {
		if (this.props.active === false) {
			this.setState({
				hover: true
			});
		}
	},
	_handleMouseOut: function _handleMouseOut() {
		if (this.props.active === false) {
			this.setState({
				hover: false
			});
		}
	}
});

var styles = {
	circle: {
		height: 15,
		width: 15,
		margin: 10,
		backgroundColor: '#fff',
		borderRadius: '50%',
		cursor: 'pointer',
		boxShadow: '0 1px 1px rgba(0,0,0,0.8)'
	}
};

module.exports = CircleButton;