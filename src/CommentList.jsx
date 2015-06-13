var React = require('react'),
    Radium = require('radium'),
    _ = require('lodash')
    
function getComment(el, idx) {
  return (
    <div key={idx}>
      <p> {el} </p>
    </div>
  )
 
}
    
var CommentList = React.createClass(Radium.wrap({
  render: function () {
    var comments = this.props.comments ? 
      _.map(this.props.comments, getComment) :
      null
    return (
      <div style={[
        styles.base
      ]}>
        {comments}
      </div>
    )
  }
}))

var styles = {
  base:{
    padding:10,
    fontFamily:'inherit'
  }
}  
  
module.exports = CommentList