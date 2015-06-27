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

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function getColumnNumber(colWidth) {
  var cols;
  var width = window.innerWidth;
  console.log(colWidth);

  if (width < colWidth * 2 + 100) {
    cols = 1;
  } else if (width < colWidth * 3 + 100) {
    cols = 2;
  } else if (width < colWidth * 5 + 100) cols = 3;else cols = 4;

  return { numColumns: cols };
}

var ColumnLayout = (function (_React$Component) {
  function ColumnLayout(props) {
    _classCallCheck(this, ColumnLayout);

    _get(Object.getPrototypeOf(ColumnLayout.prototype), 'constructor', this).call(this, props);
    this.state = {
      width: this.props.width,
      numColumns: 3
    };
  }

  _inherits(ColumnLayout, _React$Component);

  _createClass(ColumnLayout, [{
    key: 'getCards',
    value: function getCards(col) {
      var cards = _lodash2['default'].takeRight(this.props.cards, 10);
      return _lodash2['default'].filter(cards, function (card, i) {
        return i % this.state.numColumns === col;
      }, this);
    }
  }, {
    key: 'handleResize',
    value: function handleResize(e) {
      this.setState(getColumnNumber(this.props.width));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      window.addEventListener('resize', this.handleResize.bind(this));
      this.columnStyle = {
        width: this.props.width,
        maxWidth: '100%',
        margin: 10,
        display: 'inline-block',
        verticalAlign: 'top'
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {

      var cols = [];

      for (var i = 0; i < this.state.numColumns; i++) {
        cols.push(_react2['default'].createElement(
          'div',
          { key: i, className: 'column-' + i, style: [styles.column, this.props.style, this.props.width && { width: this.props.width }] },
          this.getCards(i)
        ));
      }
      return _react2['default'].createElement(
        'div',
        { style: styles.container, className: 'md-grid-container' },
        cols
      );
    }
  }]);

  return ColumnLayout;
})(_react2['default'].Component);

ColumnLayout.defaultProps = {
  width: 350
};

var styles = {
  column: {
    width: 350,
    maxWidth: '100%',
    margin: 10,
    display: 'inline-block',
    verticalAlign: 'top',
    '@media (max-width: 500px)': {
      margin: 0
    }
  },
  container: {
    display: 'table',
    margin: '0 auto'
  }
};

exports['default'] = (0, _radium2['default'])(ColumnLayout);
module.exports = exports['default'];