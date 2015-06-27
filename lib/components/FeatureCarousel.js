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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _CarouselItem = require('./CarouselItem');

var _CarouselItem2 = _interopRequireDefault(_CarouselItem);

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _libStoresCarouselStore = require('lib/stores/CarouselStore');

var _libStoresCarouselStore2 = _interopRequireDefault(_libStoresCarouselStore);

var _libStoresMatchStore = require('lib/stores/MatchStore');

var _libStoresMatchStore2 = _interopRequireDefault(_libStoresMatchStore);

var FeatureCarousel = (function (_React$Component) {
	function FeatureCarousel(props) {
		_classCallCheck(this, FeatureCarousel);

		_get(Object.getPrototypeOf(FeatureCarousel.prototype), 'constructor', this).call(this, props);
		this.state = this.getStateFromStore();
	}

	_inherits(FeatureCarousel, _React$Component);

	_createClass(FeatureCarousel, [{
		key: 'getStateFromStore',
		value: function getStateFromStore() {
			return {
				matches: _libStoresMatchStore2['default'].get(),
				active: _libStoresCarouselStore2['default'].get()
			};
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState(this.getStateFromStore());
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState(this.getStateFromStore());
			_libStoresCarouselStore2['default'].addChangeListener(this._handleChange.bind(this));
			_libStoresMatchStore2['default'].addChangeListener(this._handleMatches.bind(this));
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_libStoresCarouselStore2['default'].removeChangeListener(this._handleChange.bind(this));
			_libStoresMatchStore2['default'].removeChangeListener(this._handleMatches.bind(this));
		}
	}, {
		key: 'getStyles',
		value: function getStyles() {
			var styles = {
				base: {
					display: 'flex',
					width: '100%',
					height: '60vh',
					minHeight: 400,
					position: 'relative'
				}
			};
			return styles;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = this.getStyles();
			var carouselItems = [];
			var navigation = this.props.navigation ? _react2['default'].createElement(_Navigation2['default'], { active: this.state.active }) : null;
			if (this.state.matches && this.state.matches.length > 0) {
				for (var i = 0; i < 3; i++) {
					var active = this.state.active === i ? true : false;
					carouselItems.push(_react2['default'].createElement(_CarouselItem2['default'], { key: i, active: active, position: i, match: this.state.matches[i] }));
				}
			}
			return _react2['default'].createElement(
				'div',
				{ style: [styles.base, this.props.style] },
				carouselItems,
				navigation
			);
		}
	}, {
		key: '_handleChange',
		value: function _handleChange() {
			this.setState({
				active: _libStoresCarouselStore2['default'].get()
			});
		}
	}, {
		key: '_handleMatches',
		value: function _handleMatches() {
			this.setState({
				matches: _libStoresMatchStore2['default'].get()
			});
		}
	}]);

	return FeatureCarousel;
})(_react2['default'].Component);

FeatureCarousel.defaultProps = {
	navigation: true
};

exports['default'] = (0, _radium2['default'])(FeatureCarousel);
module.exports = exports['default'];