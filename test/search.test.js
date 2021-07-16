const expect = require('chai').expect;
const shazam = require('../src/endpoint/search');

const key = 'some5akeKey';
const term = 'term';

describe('search.js tests', () => {
    describe('shazam.search() Test', () => {
        it('should error with not subscribed', async () => {
            shazam.search(term, key).then(val =>{
                expect(val.message).to.equal('You are not subscribed to this API');
            });
            
        });
    });
});