/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testMatch: [
    // "**/__tests__/**/*.[jt]s?(x)",
    // "specs/?(*.)+(spec|test).[tj]s?(x)",
    "**/tests/spec/**.spec.js"
  ],
  testEnvironment: "node",
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
};