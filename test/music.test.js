const expect = require('chai').expect;
const music = require('../src/music');

const event = {
    body: {
        search: 'll'
    }
}


describe('shazam.js tests', () => {
    describe('handler Test', () => {
        it('should error with 403', async () => {
            const result = await music.handler(event, {});
            expect(result.response.status).to.equal(403);
        });
    });
});