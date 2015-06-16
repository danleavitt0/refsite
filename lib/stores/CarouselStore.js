'use strict';

var RefAppDispatcher = require('lib/dispatcher/RefAppDispatcher'),
    RefConstants = require('lib/constants/RefConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

var ActionTypes = RefConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var featuredNum = 0;

var CarouselStore = assign({}, EventEmitter.prototype, {

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
		return featuredNum;
	}

});

RefAppDispatcher.register(function (action) {
	switch (action.actionType) {
		case ActionTypes.CHANGE_FEATURED:
			featuredNum = action.num;
			CarouselStore.emitChange();
			break;
		default:
			break;
	}
});

module.exports = CarouselStore;