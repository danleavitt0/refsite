var React = require('react'),
	mui = require('material-ui'),
	ProfileStore = require('./stores/ProfileStore'),
	ProfileActions = require('./actions/ProfileActions'),
	ThemeManager = require('material-ui/lib/styles/theme-manager')(),
	RaisedButton = mui.RaisedButton

style = {
	marginTop:'6px'
}

var Login = React.createClass({

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
			imageStyle = {
				backgroundImage:'url('+this.props.profile.picture+')',
				height:'50px',
				width:'50px',
				borderRadius:'50%',
				backgroundSize:'cover',
				border:'1px solid #ccc'
			}
			return (
				<div>
					<div className="face" />
					<RaisedButton 
						onClick={this.logout}
						primary={true}
						label="logout"
						style={style}
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
						style={style}
					/>
				</div>
			)
		}
	}

})

module.exports = Login