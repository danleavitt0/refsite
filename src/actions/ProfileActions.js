var RefAppDispatcher = require('lib/dispatcher/RefAppDispatcher')
var RefConstants = require('lib/constants/RefConstants')

var ActionTypes = RefConstants.ActionTypes

module.exports = {

	login: function () {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.LOGIN_USER
		})
	},

	checkForLogin: function () {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.CHECK_LOGIN
		})
	},

	logout: function () {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.LOGOUT_USER
		})
	}

}
