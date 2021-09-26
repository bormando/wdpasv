const { addCommands } = require('./helpers/setup.helper');
const allureReporter = require('@wdio/allure-reporter');

exports.config = {
    specs: [
        './specs/**/*.spec.js'
    ],

    maxInstances: 1,

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://localcoding.us',
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ['devtools'],

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        disableWebdriverStepsReporting: true
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function (capabilities, specs, browser) {
        await addCommands();
    },

    afterTest: async function (test, context, result) {
        if (test.failed || result.error) {
            await browser.takeScreenshot();
            allureReporter.addAttachment('URL', await browser.getUrl(), 'text/plain');
        }
    }
}
