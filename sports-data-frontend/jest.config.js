module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
