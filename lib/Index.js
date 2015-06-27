'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _libComponents = require('lib/components');

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _libRoutesRoutes = require('lib/routes/Routes');

var _libRoutesRoutes2 = _interopRequireDefault(_libRoutesRoutes);

var _libActionsProfileActions = require('lib/actions/ProfileActions');

var _libActionsProfileActions2 = _interopRequireDefault(_libActionsProfileActions);

var _libStoresProfileStore = require('lib/stores/ProfileStore');

var _libStoresProfileStore2 = _interopRequireDefault(_libStoresProfileStore);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var ReactCSSTransitionGroup = _react2['default'].addons.CSSTransitionGroup;
var RouteHandler = _reactRouter2['default'].RouteHandler;
var HashHistory = _reactRouter2['default'].HashHistory;
var Route = _reactRouter2['default'].Route;
var DefaultRoute = _reactRouter2['default'].DefaultRoute;

var App = _react2['default'].createClass({
	displayName: 'App',

	childContextTypes: {
		muiTheme: _react2['default'].PropTypes.object
	},

	contextTypes: {
		router: _react2['default'].PropTypes.func.isRequired
	},

	getInitialState: function getInitialState() {
		return {
			profile: null
		};
	},

	getChildContext: function getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},

	// getInitialState: function() {
	// 	return {
	// 		profile: ProfileActions.checkForLogin()
	// 	}
	// },

	// componentDidMount: function() {
	// 	ProfileStore.addChangeListener(this._onchange)
	// },
	//
	// componentWillUnmount: function() {
	// 	ProfileStore.removeChangeListener(this._onchange)
	// },

	getStyles: function getStyles() {
		var styles = {
			container: {
				top: 64,
				position: 'absolute',
				left: 0,
				right: 0
			}
		};
		return styles;
	},

	mergeStyles: function mergeStyles(styleArray) {
		var styles = {};
		_lodash2['default'].forEach(styleArray, function (styleObj) {
			styles = _lodash2['default'].merge(styles, styleObj);
		});
		return styles;
	},

	render: function render() {
		var styles = this.getStyles();
		var name = this.context.router.getCurrentPath();
		var extract = name.match(/\/(.*)\//g);
		name = extract ? extract.pop().replace(/\//ig, '') : 'home';
		return _react2['default'].createElement(
			'div',
			{ className: 'app', style: this.mergeStyles([styles.container]) },
			_react2['default'].createElement(_libComponents.Header, { profile: this.state.profile, title: 'Backseat Ref' }),
			_react2['default'].createElement(
				ReactCSSTransitionGroup,
				{ container: 'div', transitionName: name },
				_react2['default'].createElement(RouteHandler, { key: name })
			)
		);
	}

	// _onchange: function() {
	// 	this.setState({
	// 		profile: ProfileStore.getProfile()
	// 	})
	// }

});

exports['default'] = App;
module.exports = exports['default'];