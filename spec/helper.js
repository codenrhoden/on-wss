// Copyright 2016, EMC, Inc.
'use strict';

module.exports = require('on-core/spec/helper');

global.onWssContext = require('../index')().initialize();
