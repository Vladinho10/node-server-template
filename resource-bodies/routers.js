'use strict';
module.exports = `'use strict';
const routerName = require('express').Router();

const { controllerName } = require('dir');

routerName.get('/basePath/pathName/:_id', controllerName.getOne);
routerName.get('/basePath/pathName', controllerName.getMany);
routerName.post('/basePath/pathName', controllerName.post);
routerName.put('/basePath/pathName/:_id', controllerName.putOne);
routerName.delete('/basePath/pathName/:_id', controllerName.deleteOne);

module.exports = routerName;
`;

