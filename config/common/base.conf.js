import hooks from './hooks.conf';
import { config } from 'dotenv';

config();

exports.config = {
    specs: [
        './specs/**/*.spec.js'
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: process.env.BASE_URL,
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ['devtools', 'geckodriver'],

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        disableWebdriverStepsReporting: true
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    ...hooks
};
