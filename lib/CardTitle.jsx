var React = require('react'),
		Radium = require('radium')

var CardTitle = React.createClass(Radium.wrap({

	render: function () {
		return (
			<div key={1} style={[
				styles.content,
				this.props.style
			]} >
				{this.props.content}
			</div>
		)
	}

}))

var styles = {
	content: {
		backgroundColor:'tomato',
		height:60,
		width:'100%',
		lineHeight:'54px',
		color:'#fff',
		padding:'5px',
		paddingLeft:'20px',
		boxSizing:'border-box',
		fontSize:22,
		fontFamily:'Roboto, sans-serif',
		opacity:0.8
	}
}

module.exports = CardTitle