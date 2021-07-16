const assert = require('assert');
const expect = require('chai').expect;
const music = require('../src/music');

const key = 'some5akeKey';
const term = 'term';

describe('music.js tests', () => {
    describe('music.search() Test', () => {
        it('should error with 403', async () => {
            const result = await music.search(term, key);
            expect(result.response.status).to.equal(403);
        });
    });
});