var React = require('react'),
		Radium = require('radium')

var Title = React.createClass(Radium.wrap({
	getDefaultProps: function() {
		return {
			label: ''	
		}
	},
	render: function () {
		return (
			<h2 
				style={[
					styles.base, 
					this.props.style
			]}> 
					{this.props.label} 
			</h2>
		)
	}
}))

var styles = {
	base: {
		display:'flex',
		fontSize: 60,
		color:'#fff',
		margin:0,
		fontWeight:400,
		flex: 1,
		alignItems: 'center'
	}
}

module.exports = Title