// import * as fs from 'fs';
// import { objects } from '../helpers';
//
// const asyncHandler = fn =>
//     function asyncUtilWrap(...args) {
//         const fnReturn = fn(...args);
//         const next = args[args.length - 1];
//         return Promise.resolve(fnReturn).catch(next);
//     };
//
// const controllers = {};
//
// const asyncClass = aClass => {
//     const newClass = {};
//     const methods = Object.getOwnPropertyNames(aClass)
//         .filter(prop => typeof aClass[prop] === 'function');
//
//     for (const method of methods) {
//         newClass[method] = asyncHandler(aClass[method]);
//     }
//
//     return newClass;
// };
//
// fs.readdirSync(__dirname)
//     .forEach(async file => {
//         console.log('file', file);
//         if (objects.isTSFileAndNotIndex(file)) {
//             const ctrl = await import(`./${file}`);
//
//             console.log('ctrl', ctrl);
//             for (const key in ctrl) {
//                 controllers[key] = asyncClass(ctrl[key]);
//             }
//         }
//     });
//
// export default controllers;

export * from './file-ctrl';
export * from './root-ctrl';
export * from './user-ctrl';
