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

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var TeamResults = (function (_React$Component) {
  function TeamResults() {
    _classCallCheck(this, TeamResults);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TeamResults, _React$Component);

  _createClass(TeamResults, [{
    key: 'getStyles',
    value: function getStyles() {
      var styles = {
        base: {
          width: '80%',
          padding: '20px 0'
        },
        results: {
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center'
        },
        card: {
          margin: '15px',
          display: 'inline-block'
        },
        cardTitle: {
          padding: '0 10px',
          alignItems: 'center'
        },
        title: {
          fontSize: 24,
          color: '#333',
          padding: '0 20px 10px 20px'
        }
      };
      return styles;
    }
  }, {
    key: 'filterResults',
    value: function filterResults(list) {
      var results = _lodash2['default'].filter(list, (function (el, idx) {
        return el.name.toLowerCase().indexOf(this.props.query) > -1;
      }).bind(this));
      return results;
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.getStyles();
      var items = _lodash2['default'].map(this.filterResults(this.props.list), function (el) {
        return _react2['default'].createElement(
          _Card2['default'],
          { style: [styles.card] },
          _react2['default'].createElement(_CardTitle2['default'], { content: el.name, style: [styles.cardTitle, { backgroundColor: el.color }] })
        );
      }, this);
      return _react2['default'].createElement(
        'div',
        { style: [this.props.style] },
        _react2['default'].createElement(_Title2['default'], { style: [styles.title], label: 'Teams' }),
        _react2['default'].createElement(
          'div',
          { style: [styles.results] },
          items
        )
      );
    }
  }]);

  return TeamResults;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(TeamResults);
module.exports = exports['default'];