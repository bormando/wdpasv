import { addCommands, getAuthData } from '../../helpers/setup.helper';
import allureReporter from '@wdio/allure-reporter';

module.exports = {
    before: async function (capabilities, specs, browser) {
        await addCommands();
        await getAuthData();

        const chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    },

    beforeTest: async function(test, context) {
        await browser.maximizeWindow();
    },

    afterTest: async function (test, context, result) {
        if (test.failed || result.error) {
            await browser.takeScreenshot();
            allureReporter.addAttachment('URL', await browser.getUrl(), 'text/plain');
            browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
        } else {
            browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
        }
    }
};