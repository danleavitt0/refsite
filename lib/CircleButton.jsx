var React = require('react'),
		CircleFill = require('./CircleFill.jsx'),
		CarouselActions = require('./actions/CarouselActions')

circleButtonStyle = {
	height: 15,
	width: 15,
	zIndex: 1,
	margin: 10,
	backgroundColor: '#fff',
	borderRadius: '50%',
	cursor: 'pointer',
	WebkitTransition: 'all .3s linear',
	boxShadow: '0 1px 1px rgba(0,0,0,0.8)'
}

var CircleButton = React.createClass({
	getInitialState: function() {
		return {
			hover:false
		}
	},
	getDefaultProps: function() {
		return {
			active:false	
		}
	},
	render: function() {
		return (
			<div 
				style={circleButtonStyle} 
				onMouseOver={this._handleMouseOver} 
				onMouseOut={this._handleMouseOut} 
				onClick={this._handleClick} 
			>
				<CircleFill active={this.props.active} hover={this.state.hover} />
			</div>
		)
	},
	_handleClick: function () {
		CarouselActions.change(this.props.position)
		this.setState({
			hover:false
		})
	},
	_handleMouseOver: function (e) {
		if(this.props.active === false) {
			this.setState({
				hover:true
			})
		}
	},
	_handleMouseOut: function () {
		if(this.props.active === false) {
			this.setState({
				hover:false
			})
		}
	}
})

module.exports = CircleButton