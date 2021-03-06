/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rootDir: '../../',
  modulePathIgnorePatterns: ['./node_modules'],
  resolver: `${__dirname}/jest.resolver.js`,
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
    PACKAGE_VERSION: 'version'
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/utils/test/jest.setup.js',
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx}',
    '!<rootDir>/packages/*/src/index.js',
    '!<rootDir>/packages/.template',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: '<rootDir>/demo/coverage',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/.template']
};
