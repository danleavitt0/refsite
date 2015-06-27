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

var MatchHeadingHome = (function (_React$Component) {
	function MatchHeadingHome() {
		_classCallCheck(this, MatchHeadingHome);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(MatchHeadingHome, _React$Component);

	_createClass(MatchHeadingHome, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				div: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					flex: 1
				},
				img: {
					height: 120,
					width: 120
				},
				title: {
					fontFamily: 'Roboto, sans-serif',
					fontWeight: 800,
					margin: 0,
					textShadow: '1px 1px rgba(0,0,0,0.2)',
					fontSize: 40,
					fontSmoothing: 'antialiased'
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
				{ style: [styles.div, this.props.style] },
				_react2['default'].createElement('img', { style: [styles.img], src: _TeamsJson2['default'][this.props.content]['logo-url'] }),
				_react2['default'].createElement(
					'h3',
					{ style: [styles.title] },
					' ',
					_TeamsJson2['default'][this.props.content].name,
					' '
				)
			);
		}
	}]);

	return MatchHeadingHome;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(MatchHeadingHome);
module.exports = exports['default'];