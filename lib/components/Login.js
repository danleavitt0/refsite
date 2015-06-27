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

var _materialUi = require('material-ui');

var _libActionsProfileActions = require('lib/actions/ProfileActions');

var _libActionsProfileActions2 = _interopRequireDefault(_libActionsProfileActions);

var ThemeManager = require('material-ui/lib/styles/theme-manager')();

var Login = (function (_React$Component) {
	function Login() {
		_classCallCheck(this, Login);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Login, _React$Component);

	_createClass(Login, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				base: {
					marginTop: 6
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
				{ className: 'LoginButton' },
				_react2['default'].createElement(_materialUi.RaisedButton, {
					primary: true,
					label: this.props.label,
					style: styles.base
				})
			);
		}
	}]);

	return Login;
})(_react2['default'].Component);

Login.contextTypes = {
	muiTheme: _react2['default'].PropTypes.object
};

Login.childContext = {
	muiTheme: ThemeManager.getCurrentTheme()
};

Login.defaultProps = {
	label: 'Login'
};

exports['default'] = (0, _radium2['default'])(Login);
module.exports = exports['default'];