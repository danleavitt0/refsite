'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ColumnLayout = require('./ColumnLayout');

var _ColumnLayout2 = _interopRequireDefault(_ColumnLayout);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardContent = require('./CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Team = require('./Team');

var _Team2 = _interopRequireDefault(_Team);

var _libStoresMatchStore = require('lib/stores/MatchStore');

var _libStoresMatchStore2 = _interopRequireDefault(_libStoresMatchStore);

var _TeamsJson = require('Teams.json');

var _TeamsJson2 = _interopRequireDefault(_TeamsJson);

var _VotingButtons = require('./VotingButtons');

var _VotingButtons2 = _interopRequireDefault(_VotingButtons);

var _materialUi = require('material-ui');

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function getMatchContent(match, i) {
	return _react2['default'].createElement(
		_Card2['default'],
		{ key: i },
		_react2['default'].createElement(
			_reactRouter.Link,
			{ style: styles.link, to: '/match/' + match.id },
			_react2['default'].createElement(
				_CardTitle2['default'],
				{ content: match.referee, style: { backgroundColor: _TeamsJson2['default'][match.info.home].color } },
				_react2['default'].createElement(_VotingButtons2['default'], null)
			),
			_react2['default'].createElement(
				_CardContent2['default'],
				null,
				_react2['default'].createElement(
					'p',
					null,
					' ',
					(0, _moment2['default'])(parseInt(match.time)).format('MMMM Do YYYY [at] h:mm a'),
					' '
				),
				_react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(_Team2['default'], { team: match.info.home, score: match.info.score[0] }),
					_react2['default'].createElement(_Team2['default'], { team: match.info.away, score: match.info.score[2] })
				)
			)
		)
	);
}

var Matches = _react2['default'].createClass({
	displayName: 'Matches',

	getInitialState: function getInitialState() {
		return {
			matches: _libStoresMatchStore2['default'].get()
		};
	},
	componentDidMount: function componentDidMount() {
		_libStoresMatchStore2['default'].addChangeListener(this._getMatches);
	},
	componentWillUnmount: function componentWillUnmount() {
		_libStoresMatchStore2['default'].removeChangeListener(this._getMatches);
	},
	render: function render() {
		var matches = this.state.matches.map(getMatchContent);
		return _react2['default'].createElement(
			'div',
			{ style: [styles.matchSection, this.props.style] },
			_react2['default'].createElement(_ColumnLayout2['default'], { cards: matches })
		);
	},
	_getMatches: function _getMatches() {
		this.setState({
			matches: _libStoresMatchStore2['default'].get()
		});
	}
});

var styles = {
	matchSection: {
		backgroundColor: '#e5e5e5'
	},
	link: {
		color: 'rgba(0,0,0,0.87)',
		textDecoration: 'none'
	}
};

exports['default'] = (0, _radium2['default'])(Matches);
module.exports = exports['default'];