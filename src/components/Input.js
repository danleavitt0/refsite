var React = require('react'),
    Radium = require('radium'),
    AutoSize = require('lib/utils/AutoSize')

var Input = React.createClass(Radium.wrap({
  getDefaultProps: function () {
    return {
      placeholder:'',
      update:function(){}
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
    return (
      <textarea
      onChange={this._handleInput}
      placeholder={this.props.placeholder}
      onKeyDown={this._checkReturn}
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
  },
  _checkReturn: function (e) {
    if(e.key === "Enter") {
      e.preventDefault()
      e.stopPropagation()
      this.props.update(this.state.value)
      this.setState({
        value:''
      })
    }
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
    transition:'box-shadow .3s cubic-bezier(0.4,0,0.2,1)',
    ':focus': {
      outline:'none',
      boxShadow:'inset 0 0 5px rgba(0,0,0,0.6)',
    }
  }
}

module.exports = Input
