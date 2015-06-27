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

var _libUtilsAutoSize = require('lib/utils/AutoSize');

var _libUtilsAutoSize2 = _interopRequireDefault(_libUtilsAutoSize);

var Input = (function (_React$Component) {
  function Input(props) {
    _classCallCheck(this, Input);

    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this, props);
    this.setState({
      value: ''
    });
  }

  _inherits(Input, _React$Component);

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        height: (0, _libUtilsAutoSize2['default'])(this)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('textarea', {
        onChange: this._handleInput.bind(this),
        placeholder: this.props.placeholder,
        onKeyDown: this._checkReturn.bind(this),
        value: this.state.value,
        style: [styles.base, this.props.style, this.state.height && { height: this.state.height }] });
    }
  }, {
    key: '_handleInput',
    value: function _handleInput(e) {
      (0, _libUtilsAutoSize2['default'])(this);
      this.setState({
        value: e.target.value,
        height: (0, _libUtilsAutoSize2['default'])(this)
      });
    }
  }, {
    key: '_checkReturn',
    value: function _checkReturn(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        this.props.update(this.state.value);
        this.setState({
          value: ''
        });
      }
    }
  }]);

  return Input;
})(_react2['default'].Component);

Input.defaultProps = {
  placeholder: '',
  update: function update() {}
};

var styles = {
  base: {
    width: '90%',
    minHeight: 22,
    borderRadius: 2,
    padding: '10px',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.3)',
    fontFamily: 'inherit',
    margin: '0 auto',
    backgroundColor: '#fff',
    cursor: 'text',
    fontSize: 20,
    display: 'block',
    fontWeight: 300,
    resize: 'none',
    border: 'none',
    transition: 'box-shadow .3s cubic-bezier(0.4,0,0.2,1)',
    ':focus': {
      outline: 'none',
      boxShadow: 'inset 0 0 5px rgba(0,0,0,0.6)'
    }
  }
};

exports['default'] = Input;
module.exports = exports['default'];