const session = require('supertest-session');
const server = require('../src/app'); // Importo el archivo de entrada del server de express.

const agent = session(server)

describe('GET /game', () => {
    it('responds with 200', () =>agent.get('/game').expect(200));
    it('responds with array length 3', () =>
      agent.get('/game').then((res) => {
        expect(res.body).toHaveLength(3);
      }));
});
