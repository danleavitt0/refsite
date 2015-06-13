var React = require('react'),
		Radium = require('radium'),
		Teams = require('./utils/Teams.json')

var ScoreBox = React.createClass(Radium.wrap({
	render: function () {
		return (
			<div style={[styles.div]}>
				<div style={[
					styles.score,
					{backgroundColor:Teams[this.props.home].color}
				]}> 
					{this.props.content[0]} 
				</div>
				<div style={[
					styles.score,
					{backgroundColor:Teams[this.props.away].color}
				]}> 
					{this.props.content[2]} 
				</div>
			</div>
		)
	}
}))

var styles = {
	div: {
		display:'flex',
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		height:'100%'
	},
	score: {
		display:'flex',
		fontSize:'5em',
		fontWeight:700,
		fontSmoothing:'antialiasing',
		flex:1,
		height:'100%',
		alignItems:'center',
		justifyContent:'center',
		boxShadow:'inset 0 2px 5px rgba(0,0,0,0.3)',
		opacity:0.9
	}
}

module.exports = ScoreBox