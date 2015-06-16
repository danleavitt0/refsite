'use strict';

var RefAppDispatcher = require('lib/dispatcher/RefAppDispatcher');
var RefConstants = require('lib/constants/RefConstants');

var ActionTypes = RefConstants.ActionTypes;

module.exports = {

	updateMatches: function updateMatches(matches) {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.GET_MATCHES,
			matches: matches
		});
	}

};