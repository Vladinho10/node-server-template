const log4js = require('log4js');

log4js.addLayout('asJson', () => logEvent => JSON.stringify({
    startTime: logEvent.startTime,
    category: logEvent.categoryName,
    level: logEvent.lxevel.levelStr,
    message: logEvent.data.map(d => d instanceof Error ? d.stack : d).join(' ')
}));

log4js.configure({
    appenders: {
        out: {
            type: 'stdout',
            layout: {
                type: 'pattern', // asJson
                pattern: '%[ %r %p %c %f{2} %l:%o %] %m',
            }
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'info',
            enableCallStack: true
        }
    }
});

