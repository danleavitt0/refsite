'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _TeamsJson = require('Teams.json');

var _TeamsJson2 = _interopRequireDefault(_TeamsJson);

var _MatchHeadingHome = require('./MatchHeadingHome');

var _MatchHeadingHome2 = _interopRequireDefault(_MatchHeadingHome);

var _ScoreBox = require('./ScoreBox');

var _ScoreBox2 = _interopRequireDefault(_ScoreBox);

var MatchHeading = (function (_React$Component) {
	function MatchHeading() {
		_classCallCheck(this, MatchHeading);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(MatchHeading, _React$Component);

	_createClass(MatchHeading, [{
		key: 'getStyles',
		value: function getStyles() {
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
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = this.getStyles();
			if (this.props.content) {
				var home = this.props.content.info.home;
				var away = this.props.content.info.away;
				return _react2['default'].createElement(
					'div',
					{ style: [styles.div, this.props.style] },
					_react2['default'].createElement(_MatchHeadingHome2['default'], { content: home }),
					_react2['default'].createElement(_ScoreBox2['default'], { home: home, away: away, content: this.props.content.info.score }),
					_react2['default'].createElement(_MatchHeadingHome2['default'], { content: away })
				);
			} else return null;
		}
	}]);

	return MatchHeading;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(MatchHeading);
module.exports = exports['default'];