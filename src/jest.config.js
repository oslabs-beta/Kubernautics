module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.js'
  ],
  transform: {
    '\\.jsx?$': 'babel-jest',
  }
};