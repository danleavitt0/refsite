var React = require('react'),
    Radium = require('radium')
    
var Placeholder = React.createClass(Radium.wrap({
  render: function () {
    return (
      <div style={[
        styles.base,
        this.props.active && styles.active,
        this.props.value && styles.active
      ]}> 
        {this.props.placeholder} 
      </div>
    )
  }
}))

var styles = {
  base: {
    fontSize:18,
    fontFamily:'inherit',
    color:'#bbb'
  },
  active: {
    display:'none'
  }
}
    
module.exports = Placeholder