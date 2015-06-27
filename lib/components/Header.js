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

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var Header = (function (_React$Component) {
	function Header() {
		_classCallCheck(this, Header);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Header, _React$Component);

	_createClass(Header, [{
		key: 'getStyles',
		value: function getStyles() {
			var theme = this.context.muiTheme;
			var styles = {
				header: {
					position: 'fixed',
					height: 64,
					left: 0,
					right: 0,
					top: 0,
					zIndex: 1,
					backgroundColor: theme.palette.primary1Color,
					boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
					display: 'flex',
					alignItems: 'center',
					padding: '0 40px'
				},
				link: {
					fontSize: '26px',
					color: '#fff',
					fontFamily: theme.contentFontFamily,
					textDecoration: 'none',
					fontSmoothing: 'antialiased',
					flex: 1
				}
			};
			return styles;
		}
	}, {
		key: 'mergeStyles',
		value: function mergeStyles(styleArray) {
			var styles = {};
			_lodash2['default'].forEach(styleArray, function (styleObj) {
				styles = _lodash2['default'].merge(styles, styleObj);
			});
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = this.getStyles();
			return _react2['default'].createElement(
				'div',
				{ style: [styles.header, this.props.style] },
				_react2['default'].createElement(
					_reactRouter.Link,
					{ to: '/', style: [styles.link] },
					this.props.title
				),
				_react2['default'].createElement(_SearchBar2['default'], null),
				_react2['default'].createElement('div', { style: { flex: 1 } })
			);
		}
	}]);

	return Header;
})(_react2['default'].Component);

Header.contextTypes = {
	muiTheme: _react2['default'].PropTypes.object
};

Header.defaultProps = {
	title: 'Title'
};

exports['default'] = (0, _radium2['default'])(Header);
module.exports = exports['default'];