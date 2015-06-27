'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Card = (function (_React$Component) {
	function Card() {
		_classCallCheck(this, Card);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Card, _React$Component);

	_createClass(Card, [{
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				card: {
					fontFamily: 'Roboto, sans-serif',
					margin: '15px 0',
					backgroundColor: '#fff',
					boxShadow: '0 0px 2px 0 rgba(0,0,0,0.26)',
					borderRadius: 2,
					transition: 'box-shadow .3s cubic-bezier(0.4,0,0.2,1)',
					cursor: 'pointer',
					':hover': {
						boxShadow: '0 0 3px rgba(0,0,0,.13),0 3px 6px rgba(0,0,0,.36)'
					}
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
				{ style: [styles.card, this.props.style] },
				this.props.children
			);
		}
	}]);

	return Card;
})(_react2['default'].Component);

module.exports = (0, _radium2['default'])(Card);