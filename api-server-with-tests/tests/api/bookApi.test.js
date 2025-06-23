const request = require('supertest');
const app = require('../../app');

describe('API - Book Endpoints', () => {
  it('should return all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
