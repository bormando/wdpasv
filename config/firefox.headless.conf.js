import merge from 'deepmerge';
import baseConf from './common/base.conf';

exports.config = merge(baseConf.config, {
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless']
        },
    }],
}, { clone: false });