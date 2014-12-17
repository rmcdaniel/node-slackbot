/*global describe, it */
'use strict';
var assert = require('assert');
var slackbot = require('../');

describe('node-slackbot node module', function () {
    it('must return itself', function () {
        var self = new slackbot();
        assert(self instanceof slackbot, 'slackbot returned something other than itself');
    });
});
