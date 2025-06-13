const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@/molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@/organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^@/templates/(.*)$': '<rootDir>/src/components/templates/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)