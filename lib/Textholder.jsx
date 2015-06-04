var React = require('react'),
    Radium = require('radium')
    
var Textholder = React.createClass(Radium.wrap({
  getDefaultProps: function () {
    return{
      value:''
    }
  },
  render: function () {
    return (
      <div style={[
        styles.base,
        this.props.style
      ]}> 
        {this.props.value} 
      </div>
    )
  }
}))

var styles={
  base: {
    fontSize:20,
    fontWeight:300,
    fontFamily:'inherit',
    display:'inline',
    whiteSpace: 'pre-wrap'
  }
}
    
module.exports = Textholder