'use strict';

var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    CREATE_POST: null,
    CHANGE_FEATURED: null,
    LOGIN_USER: null,
    LOGOUT_USER: null,
    CHECK_LOGIN: null,
    REMOVE_POST: null,
    GET_MATCHES: null
  })

};