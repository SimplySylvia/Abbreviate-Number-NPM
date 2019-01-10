var assert = require('assert');
var converter = require('../abbrNum');

describe('converter1', () => {
    describe('convert function', () => {
        it('converts numbers to strings', () => {
            var result = converter.abbrNum(3567, 2);
            assert.equal(result, '3.57K');
        });
    });
});

describe('converter2', () => {
    describe('convert function', () => {
        it('converts numbers to strings',  () => {
            var result = converter.abbrNum(2942345,1);
            assert.equal(result, '2.9M');
        });
    });
});

describe('converter3', () => {
    describe('convert function', () => {
        it('converts numbers to strings', () => {
            var result = converter.abbrNum(9876234987,3);
            assert.equal(result, '9.876B');
        });
    });
});