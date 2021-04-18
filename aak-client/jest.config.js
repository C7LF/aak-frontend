module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ['<rootDir>/config/setup.ts'],
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/lib/',
    '/tests/',
    '/coverage/',
  ],
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@graphql(.*)$': '<rootDir>/graphql$1',
    '^@components(.*)$': '<rootDir>/components$1',
    '^@icons(.*)$': '<rootDir>/components/icons$1',
    '^@models(.*)$': '<rootDir>/models$1',
    '^@config(.*)$': '<rootDir>/config$1',
    '^@mock-data(.*)$': '<rootDir>/mock-data$1',
    '^@lib(.*)$': '<rootDir>/lib$1',
    '^@enums(.*)$': '<rootDir>/enums$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '.(ts|tsx)': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
