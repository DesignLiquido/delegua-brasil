module.exports = {
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  collectCoverageFrom: ['fontes/**/*.ts'],
  coverageReporters: ['json-summary', 'lcov', 'text', 'text-summary'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@brazilian-utils/brazilian-utils$': '<rootDir>/testes/utilidades-brasileiras-simulado.ts'
  }
};
