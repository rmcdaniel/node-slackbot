/*global describe, it */
'use strict';
var assert = require('assert');
var nodeSlackbot = require('../');

describe('node-slackbot node module', function () {
    it('must have at least one test', function () {
        nodeSlackbot();
        assert(false, 'I was too lazy to write any tests. Shame on me.');
    });
});
