'use strict';
module.exports = {
    'basePath/pathName': {
        get: {
            summary: 'Get many resources',
            tags: ['tagName'],
            parameters: [
                {
                    in: 'query',
                    name: 'limit',
                    description: 'this is limit',
                    required: false,
                    schema: {
                        type: 'integer',
                    },
                },
                {
                    in: 'query',
                    name: 'offset',
                    description: 'this is offset',
                    required: false,
                    schema: {
                        type: 'string',
                    },
                },
                {
                    in: 'query',
                    name: 'sort',
                    description: 'this is sort',
                    required: false,
                    schema: {
                        type: 'string',
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Ok',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/schemaName',
                            },
                        },
                    },
                },
            },
        },
        post: {
            summary: 'Create a new resource',
            tags: ['tagName'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#components/schemas/schemaName',
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: 'Created',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/schemaName',
                            },
                        },
                    },
                },
            },
        },
        put: {
            summary: 'Update many resources',
            tags: ['tagName'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#components/schemas/schemaName',
                        },
                    },
                },
            },
            parameters: [
                {
                    in: 'body',
                    name: 'ids',
                    description: 'array of ids',
                    required: false,
                    schema: {
                        type: 'string',
                    },
                },
            ],
            responses: {
                202: {
                    description: 'Accepted',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/schemaName',
                            },
                        },
                    },
                },
            },
        },
        patch: {
            summary: 'Delete many resource',
            tags: ['tagName'],
            parameters: [
                {
                    in: 'query',
                    name: 'limit',
                    description: 'this is limit',
                    required: false,
                    schema: {
                        type: 'integer',
                    },
                },
            ],
            responses: {
                204: {
                    description: 'No content',
                },
            },
        },
    },
    'basePath/pathName/{_id}': {
        get: {
            summary: 'Get a resource by id',
            tags: ['tagName'],
            parameters: [
                {
                    name: '_id',
                    in: 'path',
                    description: 'resource\'s id',
                    required: true,
                    type: 'string',
                },
            ],
            responses: {
                200: {
                    description: 'Ok',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/schemaName',
                            },
                        },
                    },
                },
            },
        },
        put: {
            summary: 'update a resource by id',
            tags: ['tagName'],
            parameters: [
                {
                    name: '_id',
                    in: 'path',
                    description: 'resource\'s id',
                    required: true,
                    type: 'string',
                },
            ],
            responses: {
                202: {
                    description: 'Accepted',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#components/schemas/schemaName',
                            },
                        },
                    },
                },
            },
        },
        delete: {
            summary: 'delete a resource by id',
            tags: ['tagName'],
            parameters: [
                {
                    name: '_id',
                    in: 'path',
                    description: 'resource\'s id',
                    required: true,
                    type: 'string',
                },
            ],
            responses: {
                204: {
                    description: 'No content',
                },
            },
        },
    },
};

