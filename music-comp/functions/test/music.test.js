const expect = require('chai').expect;
const music = require('../music');

const event = {
    queryStringParameters: {
        search: 'll'
    }
}


describe('music.js tests', () => {
    describe('handler Test', () => {
        it('should error with not subscribed', async () => {
            const result = await music.handler(event, {});
            expect(result.statusCode).to.equal(500);
        });
    });
});