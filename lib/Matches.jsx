var React = require('react'),
		Radium = require('radium'),
		moment = require('moment'),
		ColumnLayout = require('./ColumnLayout.jsx'),
		Card = require('./Card.jsx'),
		CardContent = require('./CardContent.jsx'),
		Team = require('./Team.jsx'),
		CommentBox = require('./CommentBox.jsx'),
		MatchStore = require('./stores/MatchStore'),
		Teams = require('./utils/Teams.json'),
		_ = require('lodash')

function getMatchContent(match, i) {
	match = _.first(match)
	return (
		<Card key={i} title={match.referee} color={Teams[match.info.home].color}>
			<CardContent>
				<p> {moment(parseInt(match.time)).format('MMMM Do YYYY [at] h:mm a')} </p>
				<div>
					<Team team={match.info.home} score={match.info.score[0]} />
					<Team team={match.info.away} score={match.info.score[2]} />
				</div>
			</CardContent>
			<CommentBox id={match.id} />
		</Card>
	)
}

var Matches = React.createClass(Radium.wrap({
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
			<div style={[
				styles.matchSection,
				this.props.style
			]}>
				<ColumnLayout cards={matches} />
			</div>
		)
	},
	_getMatches: function() {
		this.setState({
			matches:MatchStore.get()
		})
	}
}))

var styles = {
	matchSection: {
		backgroundColor:'#e5e5e5'
	}
}

module.exports = Matches