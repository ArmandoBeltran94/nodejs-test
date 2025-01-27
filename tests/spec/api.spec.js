const request = require('supertest');
const express = require('express');
const api = require('../../router/api');

const app = express();
app.use('/api', api);

describe('GET /api/weather', () => {
  test('should return weather data for a valid city', async () => {
    const city = 'London';
    const response = await request(app).get(`/api/weather?city=${city}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('city', 'London');
    expect(response.body).toHaveProperty('temperature');
    expect(response.body).toHaveProperty('weather');
  });

  test('should return error for an invalid city', async () => {
    const city = 'InvalidCity';
    const response = await request(app).get(`/api/weather?city=${city}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual("");
  });

  test('should return error if city is not provided', async () => {
    const response = await request(app).get('/api/weather');
    expect(response.status).toBe(403);
    expect(response.body).toEqual({"error":[{"type":"field","msg":"Invalid value","path":"city","location":"body"},{"type":"field","msg":"Invalid value","path":"city","location":"body"}]});
});
});
