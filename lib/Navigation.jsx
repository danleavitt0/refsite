var React = require('react'),
		CircleButton = require('./CircleButton.jsx')

var navigationStyle = {
	display: 'flex',
	width:120,
	height:15,
	justifyContent:'space-between',
	position: 'relative',
	top:'90%',
	margin: '0 auto'
}

var Navigation = React.createClass({
	render: function () {
		var buttons = []
		for (var i = 0; i < 3; i++) {
			var active = this.props.active === i ? true : false
			buttons.push(<CircleButton key={i} active={active} position={i}/>)
		}
		return (
			<div style={navigationStyle} className="navigation-menu" >
				{buttons}
			</div>
		)
	}
})

module.exports = Navigation