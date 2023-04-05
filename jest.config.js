module.exports = {
  // ...
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.m?js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  globals: {
    'process.env.NODE_ENV': 'test',
  },
  testEnvironment: 'node',
  // Add the following line to support ECMAScript modules
  testURL: 'http://localhost',
};
