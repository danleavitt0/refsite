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

var _MatchHeading = require('./MatchHeading');

var _MatchHeading2 = _interopRequireDefault(_MatchHeading);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var MatchInfo = (function (_React$Component) {
	function MatchInfo(props) {
		_classCallCheck(this, MatchInfo);

		_get(Object.getPrototypeOf(MatchInfo.prototype), 'constructor', this).call(this, props);
		this.state = {
			height: window.innerHeight
		};
	}

	_inherits(MatchInfo, _React$Component);

	_createClass(MatchInfo, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('resize', this._handleResize.bind(this));
			var fireBaseRef = new _firebase2['default']('https://ref-app.firebaseio.com/matches/' + this.props.params.id);
			fireBaseRef.on('value', (function (snapshot) {
				this.setState({
					match: snapshot.val()
				});
			}).bind(this));
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this._handleResize.bind(this));
		}
	}, {
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				div: {
					minHeight: this.state.height - 64,
					backgroundColor: '#f5f5f5'
				}
			};
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = this.getStyles();
			if (this.state.match) return _react2['default'].createElement(
				'div',
				{ style: [styles.div] },
				_react2['default'].createElement(_MatchHeading2['default'], { key: 0, content: this.state.match, style: [] })
			);else return null;
		}
	}, {
		key: '_handleResize',
		value: function _handleResize() {
			this.setState({
				height: window.innerHeight
			});
		}
	}]);

	return MatchInfo;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(MatchInfo);
module.exports = exports['default'];