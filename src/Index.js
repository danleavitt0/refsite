import React from 'react'
import Radium from 'radium'
import {Header} from 'lib/components'
import Router from 'react-router'
import Routes from 'lib/routes/Routes'
import ProfileActions from 'lib/actions/ProfileActions'
import ProfileStore from 'lib/stores/ProfileStore'
import _ from 'lodash'

var ThemeManager = require('material-ui/lib/styles/theme-manager')()
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
let {RouteHandler, HashHistory, Route, DefaultRoute} = Router

var App = React.createClass({

	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  contextTypes: {
  	router: React.PropTypes.func.isRequired
  },

	getInitialState: function() {
		return {
			profile:null
		}
	},

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },

  // getInitialState: function() {
  // 	return {
  // 		profile: ProfileActions.checkForLogin()
  // 	}
  // },

  // componentDidMount: function() {
  // 	ProfileStore.addChangeListener(this._onchange)
  // },
  //
  // componentWillUnmount: function() {
  // 	ProfileStore.removeChangeListener(this._onchange)
  // },

  getStyles: function () {
    var styles = {
      container: {
        top:64,
        position:'absolute',
        left:0,
        right:0
      }
    }
    return styles
  },

	mergeStyles: function (styleArray) {
		var styles = {}
		_.forEach(styleArray, function (styleObj) {
			styles = _.merge(styles, styleObj)
		})
		return styles
	},

	render: function() {
		var styles = this.getStyles()
		var name = this.context.router.getCurrentPath()
		var extract = name.match(/\/(.*)\//g);
		name = extract ? extract.pop().replace(/\//ig,'') : 'home'
		return (
			<div className="app" style={this.mergeStyles([
				styles.container
			])}>
				<Header profile={this.state.profile} title="Backseat Ref" />
				<ReactCSSTransitionGroup container="div" transitionName={name}>
					<RouteHandler key={name} />
				</ReactCSSTransitionGroup>
			</div>
		)
	}

	// _onchange: function() {
	// 	this.setState({
	// 		profile: ProfileStore.getProfile()
	// 	})
	// }

})

export default App
