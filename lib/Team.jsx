var React = require('react'),
		Teams = require('./utils/Teams.json')

var divStyle = {
	display:"flex",
	alignItems:"center",
	justifyContent:"space-between",
	flex:"1"
}

var imgStyle = {
	display:"inline-block",
	height:50,
	width:50,
	margin:"5px",
	minWidth:50
}

var titleStyle = {
	display:"inline-block",
	margin:"5px",
	fontSize:22,
	fontWeight:"100",
	textAlign:"center"
}

var scoreStyle = {
	display:"inline-block",
	margin:"5px",
	fontSize:40
}

var teamStyle = {
	display: "flex",
  alignItems: "center",
  justifyContent: "flex-start"
}

var Team = React.createClass({
	render: function() {
		return (
			<div style={divStyle}>
				<div style={teamStyle}>
					<img style={imgStyle} src={Teams[this.props.team]['logo-url']} />
					<h3 style={titleStyle}> {Teams[this.props.team].name} </h3>
				</div>
				<h2 style={scoreStyle}> {this.props.score} </h2>
			</div>
		)
	}
})

module.exports = Team