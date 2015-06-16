'use strict';

var _ = require('lodash');

function getStyle(node) {
  var compStyle = window.getComputedStyle(node.getDOMNode());
  compStyle.getPropertyValue('padding-bottom');
  return {
    styles: _.map(compStyle, function (name) {
      return '' + name + ':' + compStyle.getPropertyValue(name);
    }).join(';'),
    sumVerticalPadding: parseInt(compStyle.getPropertyValue('padding-bottom')) + parseInt(compStyle.getPropertyValue('padding-top'))
  };
}

function AutoSize(textBox) {
  var HIDDEN_TEXTAREA_STYLE = '\n    height:0;\n    visibility:hidden;\n    overflow:hidden;\n    position:absolute;\n    z-index:-1000;\n    top:0;\n    right:0\n  ';
  var hiddenTextBox = document.getElementById('hiddenTextBox');
  if (!hiddenTextBox) {
    var hiddenTextBox = document.createElement('textarea');
    hiddenTextBox.id = 'hiddenTextBox';
    document.body.appendChild(hiddenTextBox);
  }
  var hiddenBoxAttributes = getStyle(textBox);
  hiddenTextBox.setAttribute('style', hiddenBoxAttributes.styles + ';' + HIDDEN_TEXTAREA_STYLE);
  hiddenTextBox.value = textBox.getDOMNode().value;
  hiddenTextBox.name = 'box';
  var height = hiddenTextBox.scrollHeight - hiddenBoxAttributes.sumVerticalPadding;
  // document.body.removeChild(hiddenTextBox)
  return height;
}
module.exports = AutoSize;