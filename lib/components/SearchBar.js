'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _materialUi = require('material-ui');

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var SearchBar = _react2['default'].createClass({
  displayName: 'SearchBar',

  mixins: [_reactRouter.Navigation, _reactRouter2['default'].State],

  contextTypes: {
    muiTheme: _react2['default'].PropTypes.object
  },

  getStyles: function getStyles() {
    var theme = this.context.muiTheme;
    var fontSize = 18;
    var styles = {
      base: {
        width: '80%',
        height: '80%',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        fontFamily: theme.contentFontFamily,
        fontSize: fontSize,
        position: 'relative'
      },
      input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '2px',
        flex: 1,
        border: 'none',
        height: '80%',
        outline: 'none',
        textIndent: '60px',
        fontSize: 'inherit',
        color: '#ffffff',
        transition: 'background-color .3s ease-in-out',
        ':focus': {
          backgroundColor: 'rgba(255,255,255,0.3)'
        }
      },
      icon: {
        position: 'absolute',
        color: '#ffffff',
        left: 15,
        top: 15
      }
    };
    return styles;
  },

  render: function render() {
    var styles = this.getStyles();
    return _react2['default'].createElement(
      'div',
      { style: [styles.base, this.props.style] },
      _react2['default'].createElement(
        'i',
        { style: [styles.icon], className: 'material-icons' },
        'search'
      ),
      _react2['default'].createElement('input', { onChange: this._handleInput, className: 'headerSearch', placeholder: 'Search', style: [styles.input] })
    );
  },

  _handleInput: function _handleInput(e) {
    var value = e.target.value;
    if (value.length >= 2) {
      if (this.isActive('search')) this.replaceWith('search', {}, { sr: value });else {
        this.transitionTo('search', {}, { sr: value });
      }
    }
  }

});

exports['default'] = (0, _radium2['default'])(SearchBar);
module.exports = exports['default'];