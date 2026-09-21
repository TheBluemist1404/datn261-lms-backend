import { HealthController } from './health.controller.js';

describe('HealthController', () => {
  it('reports a healthy application', () => {
    const result = new HealthController().check();

    expect(result.status).toBe('ok');
    expect(Number.isNaN(Date.parse(result.timestamp))).toBe(false);
  });
});
