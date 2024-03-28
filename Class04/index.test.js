const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Deve retornar 200 no GET /", async function(){
  const response = await request.get("/"); // chamada async
  expect(response.status).toBe(200)
});