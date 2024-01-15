module.exports = {
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],    
      "jest": {
        "preset": "ts-jest",
        "transform": {
          "^.+\\.tsx?$": "babel-jest"
        },
        "testEnvironment": "jsdom"
      }
    }
    

  