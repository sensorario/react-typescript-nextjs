module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest"
    }
}
