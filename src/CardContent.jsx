var React = require('react'),
		Radium = require('radium')

var CardContent = React.createClass(Radium.wrap({

	render: function() {
		return (
			<div style={[
				styles.content,
				this.props.style
			]} >
				{this.props.children}
			</div>
		)
	}
}))

var styles = {
	content:{
		padding:10
	}
}

module.exports = CardContent
