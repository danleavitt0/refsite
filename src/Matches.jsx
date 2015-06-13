var React = require('react'),
		Radium = require('radium'),
		moment = require('moment'),
		ColumnLayout = require('./ColumnLayout'),
		Card = require('./Card'),
		CardTitle = require('./CardTitle')
		CardContent = require('./CardContent'),
		Team = require('./Team'),
		MatchStore = require('./stores/MatchStore'),
		Teams = require('./utils/Teams.json'),
		VotingButtons = require('./VotingButtons'),
		Router = require('react-router'),
		Link = Router.Link,
		mui = require('material-ui'),
		IconButton = mui.IconButton,
		_ = require('lodash')

function getMatchContent(match, i) {
	return (
		<Card key={i}>
			<Link style={styles.link} to={"/match/"+match.id}>
				<CardTitle content={match.referee} style={{backgroundColor:Teams[match.info.home].color}}>
					<VotingButtons />
				</CardTitle>
				<CardContent>
					<p> {moment(parseInt(match.time)).format('MMMM Do YYYY [at] h:mm a')} </p>
					<div>
						<Team team={match.info.home} score={match.info.score[0]} />
						<Team team={match.info.away} score={match.info.score[2]} />
					</div>
				</CardContent>
			</Link>
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
	},
	link: {
		color:'rgba(0,0,0,0.87)',
		textDecoration:'none'
	}
}

module.exports = Matches
