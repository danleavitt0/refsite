var React = require('react')

var CardTitle = React.createClass({

	componentWillMount: function() {
		this.style = {
			backgroundColor:this.props.color,
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
	},

	render: function () {
		return (
			<div style={this.style} className="md-title-bar">
				{this.props.content}
			</div>
		)
	}
})

module.exports = CardTitle