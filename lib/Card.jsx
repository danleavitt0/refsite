var React = require('react'),
		mui = require('material-ui'),
		CardTitle = require('./CardTitle.jsx'),
		CardContent = require('./CardContent.jsx'),
		Paper = mui.Paper,
		Radium = require('radium')

var Card = React.createClass(Radium.wrap({
	getDefaultProps: function() {
		return {
			color:'rgba(0,0,0,0.8)'
		}
	},
	render: function () {
		var title = this.props.title 
			? <CardTitle style={{backgroundColor:this.props.color}} content={this.props.title} /> 
			: null
		return (
			<Paper style={[
				styles.card,
				this.props.style
			]} >
				{title}
				<CardContent content={this.props.children} />
			</Paper>
		)
	}
}))

var styles = {
	card: {
		margin:'15px 0',
		backgroundColor:'#fff'
	}
}

module.exports = Card