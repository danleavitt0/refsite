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

var _TeamsJson = require('Teams.json');

var _TeamsJson2 = _interopRequireDefault(_TeamsJson);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Team = (function (_React$Component) {
	function Team() {
		_classCallCheck(this, Team);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Team, _React$Component);

	_createClass(Team, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				div: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flex: '1'
				},
				img: {
					display: 'inline-block',
					height: 50,
					width: 50,
					margin: '5px',
					minWidth: 50
				},
				title: {
					display: 'inline-block',
					margin: '5px',
					fontSize: 22,
					fontWeight: '100',
					textAlign: 'center'
				},
				score: {
					display: 'inline-block',
					margin: '5px',
					fontSize: 40
				},
				team: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start'
				}
			};
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = this.getStyles();
			return _react2['default'].createElement(
				'div',
				{ style: styles.div },
				_react2['default'].createElement(
					'div',
					{ style: styles.team },
					_react2['default'].createElement('img', { style: styles.img, src: _TeamsJson2['default'][this.props.team]['logo-url'] }),
					_react2['default'].createElement(
						'h3',
						{ style: styles.title },
						' ',
						_TeamsJson2['default'][this.props.team].name,
						' '
					)
				),
				_react2['default'].createElement(
					'h2',
					{ style: styles.score },
					' ',
					this.props.score,
					' '
				)
			);
		}
	}]);

	return Team;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(Team);
module.exports = exports['default'];