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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardContent = require('./CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Team = require('./Team');

var _Team2 = _interopRequireDefault(_Team);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _TeamsJson = require('Teams.json');

var _TeamsJson2 = _interopRequireDefault(_TeamsJson);

var MatchResults = (function (_React$Component) {
  function MatchResults() {
    _classCallCheck(this, MatchResults);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(MatchResults, _React$Component);

  _createClass(MatchResults, [{
    key: 'getStyles',
    value: function getStyles() {
      var styles = {
        card: {
          width: 350,
          margin: 15,
          display: 'inline-block'
        },
        link: {
          textDecoration: 'none',
          color: 'inherit'
        },
        results: {
          flexWrap: 'wrap',
          justifyContent: 'center',
          overflow: 'hidden',
          height: 275
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
        return el.teams.toLowerCase().indexOf(this.props.query) > -1;
      }).bind(this));
      return results;
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.getStyles();
      var items = _lodash2['default'].map(this.filterResults(this.props.list), function (match, i) {
        return _react2['default'].createElement(
          _Card2['default'],
          { style: [styles.card], key: i },
          _react2['default'].createElement(
            _reactRouter.Link,
            { style: styles.link, to: '/match/' + match.id },
            _react2['default'].createElement(_CardTitle2['default'], { content: match.referee, style: { backgroundColor: _TeamsJson2['default'][match.info.home].color } }),
            _react2['default'].createElement(
              _CardContent2['default'],
              null,
              _react2['default'].createElement(
                'p',
                null,
                ' ',
                (0, _moment2['default'])(parseInt(match.time)).format('MMMM Do YYYY [at] h:mm a'),
                ' '
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_Team2['default'], { team: match.info.home, score: match.info.score[0] }),
                _react2['default'].createElement(_Team2['default'], { team: match.info.away, score: match.info.score[2] })
              )
            )
          )
        );
      }, this);
      return _react2['default'].createElement(
        'div',
        { style: [this.props.style] },
        _react2['default'].createElement(_Title2['default'], { style: [styles.title], label: 'Matches' }),
        _react2['default'].createElement(
          'div',
          { style: [styles.results] },
          items
        )
      );
    }
  }]);

  return MatchResults;
})(_react2['default'].Component);

exports['default'] = (0, _radium2['default'])(MatchResults);
module.exports = exports['default'];