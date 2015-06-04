var React = require('react'),
    Radium = require('radium'),
    Placeholder = require('./Placeholder.jsx'),
    Textholder = require('./Textholder.jsx'),
    Cursor = require('./Cursor.jsx'),
    AutoSize = require('./utils/AutoSize')
    
var Input = React.createClass(Radium.wrap({
  getDefaultProps: function () {
    return {
      placeholder:''
    }
  },
  getInitialState: function () {
    return({
      value:''
    })
  },
  componentDidMount: function () {
    this.setState({
      height:AutoSize(this)
    })
  },
  render: function () {
    console.log(this.state.height)
    return (
      <textarea 
      onChange={this._handleInput}
      placeholder={this.props.placeholder}
      value={this.state.value}
      style={[
        styles.base,
        this.props.style,
        this.state.height && {height: this.state.height}
      ]} >
      </textarea>
    )
  },
  _handleInput: function (e) {
    AutoSize(this)
    this.setState({
      value:e.target.value,
      height:AutoSize(this)
    })
  }
}))

var styles ={
  base: {
    width:'90%',
    minHeight:22,
    borderRadius:2,
    padding:'10px',
    boxShadow:'inset 0 0 5px rgba(0,0,0,0.3)',
    fontFamily:'inherit',
    margin:'0 auto',
    backgroundColor:'#fff',
    cursor:'text',
    fontSize:20,
    display:'block',
    fontWeight:300,
    resize:'none',
    border:'none',
    ':focus': {
      outline:'none'
    }
  }
}

module.exports = Input