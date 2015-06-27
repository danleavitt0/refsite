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

var _FeatureCarousel = require('./FeatureCarousel');

var _FeatureCarousel2 = _interopRequireDefault(_FeatureCarousel);

var _Matches = require('./Matches');

var _Matches2 = _interopRequireDefault(_Matches);

console.log(_FeatureCarousel2['default'], _Matches2['default']);

var MainContainer = (function (_React$Component) {
	function MainContainer() {
		_classCallCheck(this, MainContainer);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(MainContainer, _React$Component);

	_createClass(MainContainer, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				base: {
					overflow: 'hidden'
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
				{ key: 0, style: [styles.base, this.props.style] },
				_react2['default'].createElement(_FeatureCarousel2['default'], null),
				_react2['default'].createElement(_Matches2['default'], null)
			);
		}
	}]);

	return MainContainer;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(MainContainer);
module.exports = exports['default'];