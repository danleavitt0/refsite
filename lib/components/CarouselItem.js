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

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _ImageDarken = require('./ImageDarken');

var _ImageDarken2 = _interopRequireDefault(_ImageDarken);

var CarouselItem = (function (_React$Component) {
	function CarouselItem(props) {
		_classCallCheck(this, CarouselItem);

		_get(Object.getPrototypeOf(CarouselItem.prototype), 'constructor', this).call(this, props);
		this.state = {
			windowWidth: window.innerWidth
		};
	}

	_inherits(CarouselItem, _React$Component);

	_createClass(CarouselItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('resize', this._handleResize.bind(this));
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
					opacity: 0,
					height: '100%',
					width: '100%',
					left: '100vw',
					position: 'absolute',
					transition: 'all .5s ease-in-out',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundImage: 'url(http://afctv.net/king-include/uploads/thomas-vermaelen-of-arsenal-tackles-fernando-torres-of-chelsea-during-the-barclays-premier-league-1087872023.jpg)',
					boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)'
				},
				info: {
					color: '#fff',
					position: 'relative',
					margin: '0 auto',
					top: '10%',
					width: '80%',
					fontSize: '60px',
					fontFamily: 'Roboto,sans-serif',
					textShadow: '1px 1px rgba(0,0,0,0.8)',
					height: '80%',
					display: 'flex',
					flexDirection: 'column'
				},
				active: {
					opacity: 1,
					left: '0'
				}
			};
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var fontSize = this.state.windowWidth / 20 + 10;
			var styles = this.getStyles();
			return _react2['default'].createElement(
				'div',
				{
					style: [styles.div, this.props.style, this.props.active && styles.active]
				},
				_react2['default'].createElement(_ImageDarken2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'info', style: styles.info },
					_react2['default'].createElement(_Title2['default'], { style: { fontSize: fontSize - fontSize / 12 }, label: this.props.match.info.home + ' v ' + this.props.match.info.away }),
					_react2['default'].createElement(_Title2['default'], { style: { fontSize: fontSize, fontWeight: 800 }, label: this.props.match.info.score }),
					_react2['default'].createElement(_Title2['default'], { style: { fontSize: fontSize - fontSize / 10, flex: 3, fontWeight: 100 }, label: 'Referee: ' + this.props.match.referee })
				)
			);
		}
	}, {
		key: '_handleResize',
		value: function _handleResize() {
			this.setState({
				windowWidth: window.innerWidth
			});
		}
	}]);

	return CarouselItem;
})(_react2['default'].Component);

CarouselItem.defaultProps = {
	active: false
};

exports['default'] = (0, _radium2['default'])(CarouselItem);
module.exports = exports['default'];