'use strict';

var RefAppDispatcher = require('lib/dispatcher/RefAppDispatcher'),
    RefConstants = require('lib/constants/RefConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Firebase = require('firebase'),
    _ = require('lodash');

var ActionTypes = RefConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/referees');

var _referees = [];

fireBaseRef.on('value', function (snapshot) {
	_referees = snapshot.val() || {};
	MatchStore.emitChange();
});

var MatchStore = assign({}, EventEmitter.prototype, {

	emitChange: function emitChange() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	get: function get() {
		var referees = _.map(_referees, function (value, idx) {
			return value;
		});
		return referees;
	}

});

RefAppDispatcher.register(function (action) {
	switch (action.actionType) {
		case ActionTypes.GET_MATCHES:
			matches = action.matches;
			MatchStore.emitChange();
			break;
		default:
			break;
	}
});

module.exports = MatchStore;