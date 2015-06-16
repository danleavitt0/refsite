'use strict';

var RefAppDispatcher = require('lib/dispatcher/RefAppDispatcher'),
    RefConstants = require('lib/constants/RefConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Firebase = require('firebase'),
    _ = require('lodash');

var ActionTypes = RefConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var fireBaseRef = new Firebase('https://ref-app.firebaseio.com/matches/matches/');

var _matches = [];

fireBaseRef.on('value', function (snapshot) {
	_matches = snapshot.val().matches || {};
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
		var matches = _.map(_matches, function (value, idx) {
			return [value];
		});
		return matches;
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