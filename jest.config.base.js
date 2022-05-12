module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "ts-jest"
  },

  verbose: true,

  collectCoverage :true,

  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },

  testRunner: "jest-circus/runner",

  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
   '^@chargify/(.*)$': '<rootDir>/../$1/src',
  },

  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ]
};
