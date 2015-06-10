var _ = require('lodash')

function getStyle(node) {
  var compStyle = window.getComputedStyle(node.getDOMNode())
  compStyle.getPropertyValue('padding-bottom')
  return {
    styles: _.map(compStyle, function(name){ return `${name}:${compStyle.getPropertyValue(name)}` }).join(';'),
    sumVerticalPadding:parseInt(compStyle.getPropertyValue('padding-bottom'))+parseInt(compStyle.getPropertyValue('padding-top'))
  }
}

function AutoSize(textBox){
  const HIDDEN_TEXTAREA_STYLE = `
    height:0;
    visibility:hidden;
    overflow:hidden;
    position:absolute;
    z-index:-1000;
    top:0;
    right:0
  `;
  var hiddenTextBox = document.getElementById('hiddenTextBox')
  if(!hiddenTextBox) {
    var hiddenTextBox = document.createElement('textarea')
    hiddenTextBox.id = 'hiddenTextBox'
    document.body.appendChild(hiddenTextBox)
  }
  var hiddenBoxAttributes = getStyle(textBox)
  hiddenTextBox.setAttribute('style', hiddenBoxAttributes.styles + ';' + HIDDEN_TEXTAREA_STYLE)
  hiddenTextBox.value = textBox.getDOMNode().value
  hiddenTextBox.name="box"
  var height = hiddenTextBox.scrollHeight - hiddenBoxAttributes.sumVerticalPadding
  // document.body.removeChild(hiddenTextBox)
  return height
}
module.exports = AutoSize