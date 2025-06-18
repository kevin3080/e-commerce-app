export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
   "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  "moduleNameMapper":  {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.cjs",
  },
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
}