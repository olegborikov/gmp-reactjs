module.exports = {
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  resolver: "jest-pnp-resolver",
  testMatch: [
    '<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testURL: "http://localhost",
  testPathIgnorePatterns: [
    "node_modules"
  ],
  modulePathIgnorePatterns: [
    "/build/"
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ]
}
