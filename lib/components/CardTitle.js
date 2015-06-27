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

var CardTitle = (function (_React$Component) {
	function CardTitle() {
		_classCallCheck(this, CardTitle);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(CardTitle, _React$Component);

	_createClass(CardTitle, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				content: {
					backgroundColor: 'tomato',
					height: 60,
					width: '100%',
					lineHeight: '54px',
					color: '#fff',
					padding: '5px 12px 5px 20px',
					boxSizing: 'border-box',
					fontSize: 22,
					fontFamily: 'Roboto, sans-serif',
					opacity: 0.8,
					display: 'flex'
				},
				title: {
					flex: 1,
					padding: '0 5px'
				},
				icons: {
					lineHeight: '36px',
					position: 'relative',
					top: '2px'
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
				{ key: 1, style: [styles.content, this.props.style] },
				_react2['default'].createElement(
					'div',
					{ style: [styles.title] },
					' ',
					this.props.content,
					' '
				),
				_react2['default'].createElement(
					'div',
					{ style: [styles.icons] },
					' ',
					this.props.children,
					' '
				)
			);
		}
	}]);

	return CardTitle;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(CardTitle);
module.exports = exports['default'];