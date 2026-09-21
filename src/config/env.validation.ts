const NODE_ENV_VALUES = ['development', 'test', 'production'] as const;

type NodeEnvironment = (typeof NODE_ENV_VALUES)[number];

function parseBoolean(value: unknown, fallback: boolean): boolean {
  if (value === undefined || value === null || value === '') {
    return fallback;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  throw new Error('SWAGGER_ENABLED must be either "true" or "false".');
}

export function validateEnvironment(config: Record<string, unknown>): Record<string, unknown> {
  const nodeEnv = (config.NODE_ENV ?? 'development') as NodeEnvironment;

  if (!NODE_ENV_VALUES.includes(nodeEnv)) {
    throw new Error(`NODE_ENV must be one of: ${NODE_ENV_VALUES.join(', ')}.`);
  }

  const port = Number(config.PORT ?? 3000);

  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error('PORT must be an integer between 1 and 65535.');
  }

  const corsOrigin = String(config.CORS_ORIGIN ?? 'http://localhost:5173').trim();

  if (!corsOrigin) {
    throw new Error('CORS_ORIGIN must not be empty.');
  }

  return {
    ...config,
    NODE_ENV: nodeEnv,
    PORT: port,
    CORS_ORIGIN: corsOrigin,
    SWAGGER_ENABLED: parseBoolean(config.SWAGGER_ENABLED, nodeEnv !== 'production'),
  };
}
