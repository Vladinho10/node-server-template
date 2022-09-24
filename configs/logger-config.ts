import * as log4js from 'log4js';

log4js.addLayout('asJson', () => (logEvent):string => JSON.stringify({
    startTime: logEvent.startTime,
    category: logEvent.categoryName,
    level: logEvent.level.levelStr,
    message: logEvent.data.map(v => v instanceof Error ? v.stack : v).join(' '),
}));

log4js.configure({
    appenders: {
        out: {
            type: 'stdout',
            layout: {
                type: 'pattern', // asJson
                pattern: '%[ %r %p %f{2} %l:%o %] %m',
            },
        },
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'info',
            enableCallStack: true,
        },
    },
});

globalThis.logger = log4js.getLogger();
