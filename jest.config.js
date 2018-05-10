const jestConfig = {
    preset: 'jest-preset-angular',
    setupTestFrameworkScriptFile: '<rootDir>/src/setupJest.ts',
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.+(ts|js)?(x)',
        '<rootDir>/src/**/+(*.)+(spec|test).+(ts|js)?(x)',
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/out-tsc/',
        '<rootDir>/src/.*(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
        'src/(setupJest|jestGlobalMocks).ts',
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(@ngrx))"
    ]
};

module.exports = jestConfig;