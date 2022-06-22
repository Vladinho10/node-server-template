'use strict';
exports.__esModule = true;
var log4js = require("log4js");
log4js.addLayout('asJson', function () { return function (logEvent) { return JSON.stringify({
    startTime: logEvent.startTime,
    category: logEvent.categoryName,
    level: logEvent.level.levelStr,
    message: logEvent.data.map(function (v) { return v instanceof Error ? v.stack : v; }).join(' ')
}); }; });
log4js.configure({
    appenders: {
        out: {
            type: 'stdout',
            layout: {
                type: 'pattern',
                pattern: '%[ %r %p %f{2} %l:%o %] %m'
            }
        }
    },
    categories: {
        "default": {
            appenders: ['out'],
            level: 'info',
            enableCallStack: true
        }
    }
});
global.logger = log4js.getLogger();
