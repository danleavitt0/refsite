var RefAppDispatcher = require('../dispatcher/RefAppDispatcher')
var RefConstants = require('../constants/RefConstants')

var ActionTypes = RefConstants.ActionTypes

module.exports = {

	updateMatches: function (matches) {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.GET_MATCHES,
			matches: matches
		})
	}

}