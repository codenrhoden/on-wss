// Copyright 2016, EMC, Inc.

'use strict';

module.exports = webSocketErrorFactory;

webSocketErrorFactory.$provide = 'WebSocketError';
webSocketErrorFactory.$inject = ['Errors', 'Util'];

function webSocketErrorFactory(Errors, Util) {
  function WebSocketError(msg, ctx) {
      Errors.BaseError.call(this, msg, ctx);
      Error.captureStackTrace(this, WebSocketError);
  }

  Util.inherits(WebSocketError, Errors.BaseError);

  return WebSocketError;
}
