module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)|react-native-svg"
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/test/svgMock.js"
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.types.ts"
  ],
  setupFiles: ["<rootDir>/src/test/setupFiles.tsx"],
  setupFilesAfterEnv: ["<rootDir>/src/test/setupFilesAfterEnv.tsx"],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      lines: 70,
      functions: 70
    }
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
