'use strict';

var RefAppDispatcher = require('lib/dispatcher/RefAppDispatcher');
var RefConstants = require('lib/constants/RefConstants');

var ActionTypes = RefConstants.ActionTypes;

module.exports = {

	login: function login() {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.LOGIN_USER
		});
	},

	checkForLogin: function checkForLogin() {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.CHECK_LOGIN
		});
	},

	logout: function logout() {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.LOGOUT_USER
		});
	}

};