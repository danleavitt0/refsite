var React = require('react'),
		Radium = require('radium'),
		Teams = require('./utils/Teams.json'),
		MatchHeadingHome = require('./MatchHeadingHome'),
		ScoreBox = require('./ScoreBox')

var MatchHeading = React.createClass(Radium.wrap({
	render: function () {
		if(this.props.content) {
			var home = this.props.content.info.home
			var away = this.props.content.info.away
			console.log(home,away)
			return (
				<div style={[styles.div, this.props.style]}>
					<MatchHeadingHome content={home} />
					<ScoreBox home={home} away={away} content={this.props.content.info.score} />
					<MatchHeadingHome content={away} />
				</div>
			)
		}
		else return null
	}
}))

var styles = {
	div: {
		height:230,
		width:'100%',
		backgroundColor:'#333',
		display:'flex',
		color:'#fff',
		fontSize:30,
		alignItems:'center'
	}
}

module.exports = MatchHeading
