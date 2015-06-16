'use strict';

var React = require('react'),
    Radium = require('radium'),
    Teams = require('../../../Teams.json'),
    MatchHeadingHome = require('lib/components/MatchHeadingHome'),
    ScoreBox = require('lib/components/ScoreBox');

var MatchHeading = React.createClass(Radium.wrap({
	render: function render() {
		if (this.props.content) {
			var home = this.props.content.info.home;
			var away = this.props.content.info.away;
			console.log(home, away);
			return React.createElement(
				'div',
				{ style: [styles.div, this.props.style] },
				React.createElement(MatchHeadingHome, { content: home }),
				React.createElement(ScoreBox, { home: home, away: away, content: this.props.content.info.score }),
				React.createElement(MatchHeadingHome, { content: away })
			);
		} else return null;
	}
}));

var styles = {
	div: {
		height: 230,
		width: '100%',
		backgroundColor: '#333',
		display: 'flex',
		color: '#fff',
		fontSize: 30,
		alignItems: 'center'
	}
};

module.exports = MatchHeading;