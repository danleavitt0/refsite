'use strict';

var React = require('react'),
    Radium = require('radium'),
    moment = require('moment'),
    ColumnLayout = require('lib/components/ColumnLayout'),
    Card = require('lib/components/Card'),
    CardTitle = require('lib/components/CardTitle'),
    CardContent = require('lib/components/CardContent'),
    Team = require('lib/components/Team'),
    MatchStore = require('lib/stores/MatchStore'),
    Teams = require('../../../Teams.json'),
    VotingButtons = require('lib/components/VotingButtons'),
    Router = require('react-router'),
    Link = Router.Link,
    mui = require('material-ui'),
    IconButton = mui.IconButton,
    _ = require('lodash');

function getMatchContent(match, i) {
	return React.createElement(
		Card,
		{ key: i },
		React.createElement(
			Link,
			{ style: styles.link, to: '/match/' + match.id },
			React.createElement(
				CardTitle,
				{ content: match.referee, style: { backgroundColor: Teams[match.info.home].color } },
				React.createElement(VotingButtons, null)
			),
			React.createElement(
				CardContent,
				null,
				React.createElement(
					'p',
					null,
					' ',
					moment(parseInt(match.time)).format('MMMM Do YYYY [at] h:mm a'),
					' '
				),
				React.createElement(
					'div',
					null,
					React.createElement(Team, { team: match.info.home, score: match.info.score[0] }),
					React.createElement(Team, { team: match.info.away, score: match.info.score[2] })
				)
			)
		)
	);
}

var Matches = React.createClass(Radium.wrap({
	getInitialState: function getInitialState() {
		return {
			matches: MatchStore.get()
		};
	},
	componentDidMount: function componentDidMount() {
		MatchStore.addChangeListener(this._getMatches);
	},
	componentWillUnmount: function componentWillUnmount() {
		MatchStore.removeChangeListener(this._getMatches);
	},
	render: function render() {
		var matches = this.state.matches.map(getMatchContent);
		return React.createElement(
			'div',
			{ style: [styles.matchSection, this.props.style] },
			React.createElement(ColumnLayout, { cards: matches })
		);
	},
	_getMatches: function _getMatches() {
		this.setState({
			matches: MatchStore.get()
		});
	}
}));

var styles = {
	matchSection: {
		backgroundColor: '#e5e5e5'
	},
	link: {
		color: 'rgba(0,0,0,0.87)',
		textDecoration: 'none'
	}
};

module.exports = Matches;