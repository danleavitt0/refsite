var React = require('react'),
	mui = require('material-ui'),
	ProfileStore = require('./stores/ProfileStore'),
	ProfileActions = require('./actions/ProfileActions'),
	ThemeManager = require('material-ui/lib/styles/theme-manager')(),
	RaisedButton = mui.RaisedButton,
	Radium = require('radium')

var Login = React.createClass(Radium.wrap({

	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },

	getDefaultProps: function () {
		return {
			label: "Login"
		}
	},

	login: function () {
		ProfileActions.login()
	},

	logout: function () {
		ProfileActions.logout()
	},

	render: function () {
		if (this.props.profile) {
			return (
				<div>
					<RaisedButton 
						onClick={this.logout}
						primary={true}
						label="logout"
						style={styles.base}
					/>
				</div>
			)
		}
		else {
			return(
				<div className="LoginButton">
					<RaisedButton 
						onClick={this.login}
						primary={true}
						label={this.props.label} 
						style={styles.base}
					/>
				</div>
			)
		}
	}

}))

var styles = {
	base: {
		marginTop:6
	}
}

module.exports = Login