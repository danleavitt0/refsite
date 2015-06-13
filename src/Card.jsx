var React = require('react'),
		mui = require('material-ui'),
		CardTitle = require('./CardTitle'),
		Paper = mui.Paper,
		Radium = require('radium')

var Card = React.createClass(Radium.wrap({
	render: function () {
		return (
			<div style={[
				styles.card,
				this.props.style
			]} >
				{this.props.children}
			</div>
		)
	}
}))

var styles = {
	card: {
		fontFamily:'Roboto, sans-serif',
		margin:'15px 0',
		backgroundColor:'#fff',
		boxShadow: '0 1px 4px 0 rgba(0,0,0,0.37)',
		borderRadius:2,
		transition:'box-shadow .3s cubic-bezier(0.4,0,0.2,1)',
		cursor:'pointer',
		':hover': {
			boxShadow: '0 0 3px rgba(0,0,0,.13),0 3px 6px rgba(0,0,0,.36)'
		}
	}
}

module.exports = Card
