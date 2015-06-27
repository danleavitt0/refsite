import React from 'react'
import Radium from 'radium'
import AutoSize from 'lib/utils/AutoSize'

class Input extends React.Component {

  constructor (props) {
    super(props)
    this.setState({
      value: ''
    })
  }

  componentDidMount () {
    this.setState({
      height:AutoSize(this)
    })
  }

  render () {
    return (
      <textarea
      onChange={this._handleInput.bind(this)}
      placeholder={this.props.placeholder}
      onKeyDown={this._checkReturn.bind(this)}
      value={this.state.value}
      style={[
        styles.base,
        this.props.style,
        this.state.height && {height: this.state.height}
      ]} >
      </textarea>
    )
  }

  _handleInput (e) {
    AutoSize(this)
    this.setState({
      value:e.target.value,
      height:AutoSize(this)
    })
  }

  _checkReturn (e) {
    if(e.key === "Enter") {
      e.preventDefault()
      e.stopPropagation()
      this.props.update(this.state.value)
      this.setState({
        value:''
      })
    }
  }

}

Input.defaultProps = {
  placeholder:'',
  update:function(){}
}

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

export default Input
