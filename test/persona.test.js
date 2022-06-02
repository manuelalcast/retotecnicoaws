const supertest = require('supertest');
const app = require('../src/personas/routes')

const api = supertest(app);

test('obtener persona' ,  async () => {
    await api
        .get('/persona')
        .expect(200)
        .expect('Content-Type', /aplication\json/)
});


test('obtener persona id' ,  async () => {
    await api
        .get('/persona')
        .expect(200)
        .expect('Content-Type', /aplication\json/)
});