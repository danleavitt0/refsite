var React = require('react'),
		Teams = require('../../../Teams.json'),
		Radium = require('radium')


var Team = React.createClass(Radium.wrap({
	render: function() {
		return (
			<div style={styles.div}>
				<div style={styles.team}>
					<img style={styles.img} src={Teams[this.props.team]['logo-url']} />
					<h3 style={styles.title}> {Teams[this.props.team].name} </h3>
				</div>
				<h2 style={styles.score}> {this.props.score} </h2>
			</div>
		)
	}
}))

var styles = {
	div: {
		display:"flex",
		alignItems:"center",
		justifyContent:"space-between",
		flex:"1"
	},
	img: {
		display:"inline-block",
		height:50,
		width:50,
		margin:"5px",
		minWidth:50
	},
	title: {
		display:"inline-block",
		margin:"5px",
		fontSize:22,
		fontWeight:"100",
		textAlign:"center"
	},
	score: {
		display:"inline-block",
		margin:"5px",
		fontSize:40
	},
	team: {
		display: "flex",
	  alignItems: "center",
	  justifyContent: "flex-start"
	}
}

module.exports = Team
