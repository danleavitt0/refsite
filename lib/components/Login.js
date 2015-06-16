'use strict';

var React = require('react'),
    mui = require('material-ui'),
    ProfileStore = require('lib/stores/ProfileStore'),
    ProfileActions = require('lib/actions/ProfileActions'),
    ThemeManager = require('material-ui/lib/styles/theme-manager')(),
    RaisedButton = mui.RaisedButton,
    Radium = require('radium');

var Login = React.createClass(Radium.wrap({

	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext: function getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			label: 'Login'
		};
	},

	login: function login() {
		ProfileActions.login();
	},

	logout: function logout() {
		ProfileActions.logout();
	},

	render: function render() {
		if (this.props.profile) {
			return React.createElement(
				'div',
				null,
				React.createElement(RaisedButton, {
					onClick: this.logout,
					primary: true,
					label: 'logout',
					style: styles.base
				})
			);
		} else {
			return React.createElement(
				'div',
				{ className: 'LoginButton' },
				React.createElement(RaisedButton, {
					onClick: this.login,
					primary: true,
					label: this.props.label,
					style: styles.base
				})
			);
		}
	}

}));

var styles = {
	base: {
		marginTop: 6
	}
};

module.exports = Login;