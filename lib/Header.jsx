var React = require('react'),
		Radium = require('radium'),
		mui = require('material-ui'),
		Login = require('./Login.jsx'),
		Router = require('react-router'),
		Link = Router.Link,
		AppBar = mui.AppBar

var Header = React.createClass(Radium.wrap({

	contextTypes: {
		muiTheme: React.PropTypes.object
	},

	getDefaultProps: function() {
		return {
			title: "Title"
		}
	},

	getStyles: function () {
		var theme = this.context.muiTheme
		console.log(theme)
		var styles = {
			header:{
				position:'fixed',
				height:64,
				left:0,
				right:0,
				top:0,
				zIndex:1,
				backgroundColor:theme.palette.primary1Color,
				boxShadow:'0 2px 5px rgba(0,0,0,0.3)',
				display:'flex',
				alignItems:'center',
				padding:'0 30px'
			},
			link:{
				fontSize:'32px',
				color:'#fff',
				fontFamily:theme.contentFontFamily,
				textDecoration:'none',
				fontWeight:'bolder',
				fontSmoothing:'antialiased',
				textShadow:'1px 1px rgba(0,0,0,0.1), -1px -1px rgba(0,0,0,0.1)'
			}
		}
		return styles
	},

	render: function() {
		var styles = this.getStyles()
		return (
			<div style={[
				styles.header,
				this.props.style
			]}>
				<Link to={"/"} style={[styles.link]}>{this.props.title}</Link>
			</div>
		)
	}

}))

module.exports = Header;
