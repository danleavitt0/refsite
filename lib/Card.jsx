var React = require('react'),
		mui = require('material-ui'),
		CardTitle = require('./CardTitle.jsx'),
		CardContent = require('./CardContent.jsx'),
		Paper = mui.Paper

var cardStyle = {
	margin:'15px 0',
	backgroundColor:'#fff'
}

var Card = React.createClass({
	getDefaultProps: function() {
		return {
			color:'rgba(0,0,0,0.8)'
		}
	},
	render: function () {
		var title = this.props.title 
			? <CardTitle color={this.props.color} content={this.props.title} /> 
			: null
		console.log(title)
		return (
			<Paper style={cardStyle}>
				{title}
				<CardContent content={this.props.children} />
			</Paper>
		)
	}
})

module.exports = Card