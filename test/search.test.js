const expect = require('chai').expect;
const shazam = require('../src/shazam/search');

const key = 'some5akeKey';
const term = 'term';

describe('shazam.js tests', () => {
    describe('shazam.search() Test', () => {
        it('should error with 403', async () => {
            const result = await shazam.search(term, key);
            expect(result.response.status).to.equal(403);
        });
    });
});