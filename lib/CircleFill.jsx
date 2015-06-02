var React = require('react'),
		Radium = require('radium')

var CircleFill = React.createClass(Radium.wrap({
	render: function() {
 		return (
			<div style={[
				styles.circle,
				this.props.hover && styles.hover,
				this.props.active && styles.active
			]} />
		)
	}
}))

var styles = {
	circle:{
		height:'15px',
		width:'15px',
		borderRadius:'50%',
		opacity:0,
		transition: 'all .3s ease-in',
		backgroundColor:'#00BCD4'
	},
	hover: {
		opacity:0.4
	},
	active: {
		opacity:1
	}
}

module.exports = CircleFill