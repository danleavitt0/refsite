'use strict';

var RefAppDispatcher = require('lib/dispatcher/RefAppDispatcher');
var RefConstants = require('lib/constants/RefConstants');

var ActionTypes = RefConstants.ActionTypes;

module.exports = {

	change: function change(i) {
		RefAppDispatcher.dispatch({
			actionType: ActionTypes.CHANGE_FEATURED,
			num: i
		});
	}

};