var React = require('react')

var circleFillOuterStyle = {
	height:'15px',
	width:'15px',
	borderRadius:'50%',
	WebkitTransition: 'all .3s ease-in'
}

var circleFillInnerStyle = {
	height: '100%',
	width: '100%',
	borderRadius: '50%',
	backgroundColor:'#00BCD4',
	opacity:1,
	WebkitTransition:'all .3s linear'
}

var CircleFill = React.createClass({
	render: function() {
		if (this.props.active) 
			circleFillInnerStyle.opacity = 1
		else if (this.props.hover) 
			circleFillInnerStyle.opacity = .4
		else 
			circleFillInnerStyle.opacity = 0
 		return (
			<div style={circleFillOuterStyle} className="base-circle-fill">
				<div style={circleFillInnerStyle} className="inner-circle-fill" />
			</div>
		)
	}
})

module.exports = CircleFill