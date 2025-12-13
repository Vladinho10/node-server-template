import log4js from 'log4js';

declare global {
  var logger: log4js.Logger;
  var io: import('socket.io').Server;
  var CustomError: typeof import('./services/custom-error').CustomError;
}

export {};
