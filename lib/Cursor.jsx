var React = require('react'),
    Radium = require('radium')
    
var Cursor = React.createClass(Radium.wrap({
  render: function () {
    return (
      <div style={[
        styles.base,
        this.props.active && styles.active
      ]}> 
        | 
      </div>
    )
  }
}))

var styles ={
  base:{
    fontSize:22,
    fontWeight:300,
    display:'none'
  },
  active:{
    display:'inline-block'
  }
}

module.exports = Cursor