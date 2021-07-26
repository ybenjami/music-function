const expect = require('chai').expect;
const endpoint = require('../endpoint/search');

const key = 'some5akeKey';
const term = 'term';

describe('search.js tests', () => {
    describe('endpoint.search() Test', () => {
        it('should error with not subscribed', async () => {
            endpoint.search(term, key).then(val =>{
                expect(val.message).to.equal('You are not subscribed to this API');
            });
            
        });
    });
});