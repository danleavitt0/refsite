import React from 'react'
import Radium from 'radium'
import {RaisedButton} from 'material-ui'
import ProfileActions from 'lib/actions/ProfileActions'
var ThemeManager = require('material-ui/lib/styles/theme-manager')()

class Login extends React.Component {

	getStyles () {
		var styles = {
			base: {
				marginTop:6
			}
		}
		return styles
	}

	render () {
		var styles = this.getStyles()
		return(
			<div className="LoginButton">
				<RaisedButton
					primary={true}
					label={this.props.label}
					style={styles.base}
				/>
			</div>
		)
	}

}

Login.contextTypes = {
	muiTheme: React.PropTypes.object
}

Login.childContext = {
	muiTheme: ThemeManager.getCurrentTheme()
}

Login.defaultProps = {
	label: "Login"
}

export default Radium(Login)
