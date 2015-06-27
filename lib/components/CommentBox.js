'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _libComponents = require('lib/components');

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var CommentBox = (function (_React$Component) {
  function CommentBox(props) {
    _classCallCheck(this, CommentBox);

    _get(Object.getPrototypeOf(CommentBox.prototype), 'constructor', this).call(this, props);
    this.setState({
      comments: null
    });
  }

  _inherits(CommentBox, _React$Component);

  _createClass(CommentBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fireBaseRef = new _firebase2['default']('https://ref-app.firebaseio.com/matches/matches/' + this.props.id);
      fireBaseRef.on('value', (function (snapshot) {
        this.data = snapshot.val();
        this.setState({
          comments: this.data.comments || null
        });
      }).bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: [styles.commentBox, this.props.styles] },
        _react2['default'].createElement(_libComponents.CommentList, { comments: this.state.comments }),
        _react2['default'].createElement(_libComponents.CommentInput, { id: this.props.id })
      );
    }
  }]);

  return CommentBox;
})(_react2['default'].Component);

var styles = {
  commentBox: {
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#f5f5f5'
  }
};

module.exports = (0, _radium2['default'])(CommentBox);