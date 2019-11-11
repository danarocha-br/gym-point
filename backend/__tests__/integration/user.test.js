import request from 'supertest';
import bcrypt from 'bcrypt';

import app from '../../src/app';
import Factory from '../factories';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password when new user is created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('should be able to register an user', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email'),
    async () => {
      const user = await factory.attrs('User');

      await request(app)
        .post('/users')
        .send(user);

      const response = await request(app)
        .post('/users')
        .send(user);

      expect(response.status).toBe(400);
    };
});
