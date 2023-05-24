module.exports = {
  preset: '@jest/preset-react',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js', '**/*.spec.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
