module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.js'
  ],
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
  // moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "png", "json", "node"],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|gif|png)': '<rootDir>/__mocks__/fileMock.js',
  // },
};