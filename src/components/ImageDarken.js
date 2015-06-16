var React = require('react'),
		Radium = require('radium')

var ImageDarken = React.createClass(Radium.wrap({
	render: function () {
		return (
			<div style={[
				styles.base,
				this.props.style,
				this.props.darken && {backgroundColor: 'rgba(0,0,0,'+this.props.darken+')'}
			]} />
		)
	}
}))

var styles = {
	base:{
		position:'absolute',
		width:'100%',
		height:'100%',
		backgroundColor:'rgba(0,0,0,0.3)',
	}
}

module.exports = ImageDarken
