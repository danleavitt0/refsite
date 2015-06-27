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

var CircleFill = (function (_React$Component) {
	function CircleFill() {
		_classCallCheck(this, CircleFill);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(CircleFill, _React$Component);

	_createClass(CircleFill, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				circle: {
					height: '15px',
					width: '15px',
					borderRadius: '50%',
					opacity: 0,
					transition: 'all .3s ease-in',
					backgroundColor: '#00BCD4'
				},
				hover: {
					opacity: 0.4
				},
				active: {
					opacity: 1
				}
			};
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = this.getStyles();
			return _react2['default'].createElement('div', { style: [styles.circle, this.props.hover && styles.hover, this.props.active && styles.active] });
		}
	}]);

	return CircleFill;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(CircleFill);
module.exports = exports['default'];