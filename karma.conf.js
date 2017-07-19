'use strict';

const path = require('path');

module.exports = function(config) {


    const fileCollection = [
        'src/node_modules/angular/angular.js',
        'src/node_modules/@uirouter/core/_bundles/ui-router-core.min.js',
        'src/node_modules/@uirouter/angularjs/release/ui-router-angularjs.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'src/public/main.js',
        'test/**/*.js'
    ];

    const excludeFiles = [

    ];

    const configObj = {

    }

    config.set({
        browsers: ['Chrome'],
        frameworks: ['mocha', 'chai'],
        basePath: __dirname,
        files: fileCollection,
        exlude: excludeFiles,
        reporters: ['progress'],
        preprocessors: {

        },
        coverageReporter: {

        }
    });
}
