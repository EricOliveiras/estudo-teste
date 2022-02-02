const request = require('supertest');

const app = require('../../src/app');
const User = require('../../src/database/models/User');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should create a user', async () => {
    const response = request(app)
      .post('/users')
      .send({
        name: 'eric',
        email: 'email@email.com',
        password: '123456'
      })

    expect(response.status).toBe(200);
  });
})