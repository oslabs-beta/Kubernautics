const request = require('supertest');
const server = require('../server');

describe("POST /api/pull", () => {
  describe("Given a promQL query string,", () => {
    test("should respond with a status code of 200", async () => {
      const body = 'query=container_cpu_usage_seconds_total{namespace="default"}[20m]'
      const response = await request(server).post('/api/pull').send(body)
      expect(response.statusCode).toBe(200);
    });
  });
  describe("In the absence of a query string,", () => {
    test("The server should return status 404", async () => {
      const body = '';
      const response = await request(server).post('/api/pull').send(body);
      expect(response.statusCode).toBe(404);
    });
  });
});
