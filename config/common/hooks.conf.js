import { addCommands } from '../../helpers/setup.helper';
import allureReporter from '@wdio/allure-reporter';

module.exports = {
    before: async function (capabilities, specs, browser) {
        await addCommands();
    },

    afterScenario: async function (world, result) {
        if (!result.passed || world.result.status === 'FAILED') {
            await browser.takeScreenshot();
            allureReporter.addAttachment('URL', await browser.getUrl(), 'text/plain');
        }
    },
};