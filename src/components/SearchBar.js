import React from 'react'
import Radium from 'radium'
import {FontIcon} from 'material-ui'
import Router from 'react-router'
import {Navigation} from 'react-router'
import _ from 'lodash'

var SearchBar = React.createClass({

  mixins: [Navigation, Router.State],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  getStyles: function () {
    var theme = this.context.muiTheme
    var fontSize = 18
    var styles = {
      base:{
        width:'80%',
        height:'80%',
        flex:4,
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        fontFamily:theme.contentFontFamily,
        fontSize:fontSize,
        position:'relative'
      },
      input: {
        backgroundColor:'rgba(255,255,255,0.2)',
        borderRadius:'2px',
        flex:1,
        border:'none',
        height:'80%',
        outline:'none',
        textIndent:'60px',
        fontSize:'inherit',
        color:'#ffffff',
        transition:'background-color .3s ease-in-out',
        ':focus': {
          backgroundColor:'rgba(255,255,255,0.3)'
        },
      },
      icon: {
        position:'absolute',
        color:'#ffffff',
        left:15,
        top:15
      }
    }
    return styles
  },

  render: function () {
    var styles = this.getStyles()
    return (
      <div style={[
        styles.base,
        this.props.style
      ]}>
        <i style={[styles.icon]} className="material-icons">search</i>
        <input onChange={this._handleInput} className="headerSearch" placeholder="Search" style={[styles.input]} />
      </div>
    )
  },

  _handleInput: function (e) {
    var value = e.target.value
    if(value.length >= 2) {
      if(this.isActive('search'))
        this.replaceWith('search', {}, {sr:value})
      else {
        this.transitionTo('search', {}, {sr:value})
      }
    }
  }

})

export default Radium(SearchBar)
