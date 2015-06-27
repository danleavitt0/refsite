'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Thumb = require('./Thumb');

var _Thumb2 = _interopRequireDefault(_Thumb);

var VotingButtons = (function (_React$Component) {
	function VotingButtons(props) {
		_classCallCheck(this, VotingButtons);

		_get(Object.getPrototypeOf(VotingButtons.prototype), 'constructor', this).call(this, props);
		this.state = {
			up: false,
			down: false
		};
	}

	_inherits(VotingButtons, _React$Component);

	_createClass(VotingButtons, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_Thumb2['default'], { handleClick: this._handleUp.bind(this), active: this.state.up, ref: 'up', direction: 'up' }),
				_react2['default'].createElement(_Thumb2['default'], { handleClick: this._handleDown.bind(this), active: this.state.down, ref: 'down', direction: 'down' })
			);
		}
	}, {
		key: '_handleUp',
		value: function _handleUp() {
			var up = this.state.up ? false : true;
			this.setState({
				up: up,
				down: false
			});
		}
	}, {
		key: '_handleDown',
		value: function _handleDown() {
			var down = this.state.down ? false : true;
			this.setState({
				up: false,
				down: down
			});
		}
	}]);

	return VotingButtons;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(VotingButtons);
module.exports = exports['default'];