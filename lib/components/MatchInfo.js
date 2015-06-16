'use strict';

var React = require('react'),
    Radium = require('radium'),
    MatchHeading = require('lib/components/MatchHeading'),
    Firebase = require('firebase');

var MatchInfo = React.createClass(Radium.wrap({
	componentDidMount: function componentDidMount() {
		var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/' + this.props.params.matchId);
		fireBaseRef.on('value', (function (snapshot) {
			this.setState({
				match: snapshot.val()
			});
		}).bind(this));
	},
	render: function render() {
		if (this.state.match) return React.createElement(
			'div',
			{ style: [styles.div] },
			React.createElement(MatchHeading, { key: 0, content: this.state.match, style: [] }),
			React.createElement('div', null)
		);else return null;
	}
}));

var styles = {
	div: {
		minHeight: '100vh',
		backgroundColor: '#f5f5f5'
	}
};

module.exports = MatchInfo;