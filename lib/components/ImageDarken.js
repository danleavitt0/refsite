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

var ImageDarken = (function (_React$Component) {
	function ImageDarken() {
		_classCallCheck(this, ImageDarken);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(ImageDarken, _React$Component);

	_createClass(ImageDarken, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				base: {
					position: 'absolute',
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0,0,0,0.3)'
				}
			};
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = this.getStyles();
			return _react2['default'].createElement('div', { style: [styles.base, this.props.style, this.props.darken && { backgroundColor: 'rgba(0,0,0,' + this.props.darken + ')' }] });
		}
	}]);

	return ImageDarken;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(ImageDarken);
module.exports = exports['default'];