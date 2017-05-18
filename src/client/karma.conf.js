module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            { pattern: './node_modules/chai/chai.js', watched: false, included: true, served: true },
            { pattern: './node_modules/sinon/pkg/sinon.js', watched: false, included: true, served: true },
            // 'node_modules/sinon/lib/sinon/spy.js',
            // "node_modules/sinon/lib/sinon/call.js",
            // "node_modules/sinon/lib/sinon/behavior.js",
            // "node_modules/sinon/lib/sinon/stub.js",
            // "node_modules/sinon/lib/sinon/mock.js",
            // "node_modules/sinon/lib/sinon/collection.js",
            // "node_modules/sinon/lib/sinon/assert.js",
            // "node_modules/sinon/lib/sinon/sandbox.js",
            // "node_modules/sinon/lib/sinon/test.js",
            // "node_modules/sinon/lib/sinon/test_case.js",
            // "node_modules/sinon/lib/sinon/match.js",
            // 'node_modules/angular/angular.js',

            // { pattern: 'client/app/common/**/*.spec.js', watched: false },
            // { pattern: 'client/app/components/**/*.spec.js', watched: false },
            // { pattern: './node_modules/angular/angular.js', watched: false, included: true, served: true },
            // { pattern: './node_modules/angular-mocks/angular-mocks.js', watched: false, included: true, served: true },
            { pattern: './node_modules/ng-describe/dist/ng-describe.js', watched: false, included: true, served: true },
            // './node_modules/lazy-ass-helpful/lazy-ass-helpful-browser.js',
            // './node_modules/lazy-ass-helpful/lazy-ass-helpful-bdd.js',
            'client/app/app.js',
            // 'node_modules/angular-mocks/angular-mocks.js',
            { pattern: 'spec.bundle.js', watched: false }

        ],

        exclude: [],

        plugins: [
            require("karma-chai"),
            require("karma-chrome-launcher"),
            require("karma-mocha"),
            require("karma-mocha-reporter"),
            require("karma-sourcemap-loader"),
            require("karma-webpack")
        ],

        preprocessors: {
            '../ng-describe.js': [],
            './client/app/*.js': ['webpack'],
             './client/app/**/*.module.js': ['webpack'],
             './client/app/**/*.service.js': ['webpack'],
            'spec.bundle.js': ['webpack', 'sourcemap']

        },

        webpack: {
            resolve: {
                extensions: ['', '.js']
            },
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
                    { test: /\.html$/, loader: 'raw' },
                    { test: /\.scss$/, loader: 'style!css!sass' },
                    { test: /\.css$/, loader: 'style!css' }
                ]
            }
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['mocha'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['Chrome'],

        singleRun: false
    });
};
