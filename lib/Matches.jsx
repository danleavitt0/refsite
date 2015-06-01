var React = require('react'),
		moment = require('moment'),
		ColumnLayout = require('./ColumnLayout.jsx'),
		Card = require('./Card.jsx'),
		Team = require('./Team.jsx'),
		MatchStore = require('./stores/MatchStore'),
		Teams = require('./utils/Teams.json'),
		$ = require('jquery')

var teamStyle ={
	display:"block"
}

var matchSectionStyle = {
	backgroundColor:"#e5e5e5"
}

function getMatchContent(match, i) {
	match = _.first(match)
	return (
		<Card key={i} title={match.referee} color={Teams[match.info.home].color}>
			<p> {moment(parseInt(match.time)).format('MMMM Do YYYY [at] h:mm a')} </p>
			<div style={teamStyle} className="teams">
				<Team team={match.info.home} score={match.info.score[0]} />
				<Team team={match.info.away} score={match.info.score[2]} />
			</div>
		</Card>
	)
}

var Matches = React.createClass({
	getInitialState: function() {
		return {
			matches:MatchStore.get() 
		}
	},
	componentDidMount: function() {
		MatchStore.addChangeListener(this._getMatches)
	},
	componentWillUnmount: function() {
		MatchStore.removeChangeListener(this._getMatches)
	},
	render: function () {
		var matches = this.state.matches.map(getMatchContent)
		return (
			<div style={matchSectionStyle} className="match-section">
				<ColumnLayout cards={matches} />
			</div>
		)
	},
	_getMatches: function() {
		this.setState({
			matches:MatchStore.get()
		})
	}
})

module.exports = Matches