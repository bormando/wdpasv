import hooks from './hooks.conf';

exports.config = {
    specs: [
        './features/**/*.feature'
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://localcoding.us',
    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ['devtools', 'geckodriver'],

    framework: 'cucumber',

    reporters: ['spec', ['allure', {
        disableWebdriverStepsReporting: true,
        useCucumberStepReporter: true
    }]],

    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./steps/**/*.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },

    ...hooks
};
