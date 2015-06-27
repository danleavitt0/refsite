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

var _CircleButton = require('./CircleButton');

var _CircleButton2 = _interopRequireDefault(_CircleButton);

var Navigation = (function (_React$Component) {
	function Navigation() {
		_classCallCheck(this, Navigation);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Navigation, _React$Component);

	_createClass(Navigation, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				div: {
					display: 'flex',
					width: 120,
					height: 15,
					justifyContent: 'space-between',
					position: 'relative',
					top: '90%',
					margin: '0 auto'
				}
			};
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = this.getStyles();
			var buttons = [];
			for (var i = 0; i < 3; i++) {
				var active = this.props.active === i ? true : false;
				buttons.push(_react2['default'].createElement(_CircleButton2['default'], { key: i, active: active, position: i }));
			}
			return _react2['default'].createElement(
				'div',
				{ style: [styles.div, this.props.style] },
				buttons
			);
		}
	}]);

	return Navigation;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(Navigation);
module.exports = exports['default'];