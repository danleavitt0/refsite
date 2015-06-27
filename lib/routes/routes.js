'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libViewsSearch = require('lib/views/Search');

var _libViewsSearch2 = _interopRequireDefault(_libViewsSearch);

var _libViewsMatch = require('lib/views/Match');

var _libViewsMatch2 = _interopRequireDefault(_libViewsMatch);

var _libIndex = require('lib/Index');

var _libIndex2 = _interopRequireDefault(_libIndex);

var _libComponents = require('lib/components');

var _reactRouter = require('react-router');

var routes = _react2['default'].createElement(
  _reactRouter.Route,
  { name: 'main', path: '/', handler: _libIndex2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { name: 'search', path: '/search', handler: _libViewsSearch2['default'] }),
  _react2['default'].createElement(
    _reactRouter.Route,
    { name: 'match', path: '/match', handler: _libViewsMatch2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { name: 'matchInfo', path: '/match/:id', handler: _libComponents.MatchInfo })
  ),
  _react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'home', handler: _libComponents.MainContainer })
);

module.exports = routes;