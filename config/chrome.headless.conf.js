import merge from 'deepmerge';
import baseConf from './common/base.conf';

exports.config = merge(baseConf.config, {
    maxInstances: 2,
    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--window-size=1280,720', '--headless', '--disable-gpu']
        },
    }],
}, { clone: false });