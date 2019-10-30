/* eslint-disable strict */

const {expect} = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');

describe('GET /frequency endpoint', () => {
  it('count frequency of char', () =>{
    return supertest(app)
      .get('/frequency')
      .query({ s: 'aaBBAAbbaa'})
      .expect(200)
  });
});

