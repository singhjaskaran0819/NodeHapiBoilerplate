const Inert = require('@hapi/inert'),
    Vision = require('@hapi/vision'),
    HapiSwagger = require('hapi-swagger'),
    hapiJwt = require('hapi-auth-jwt2'),
    PACKAGE = require('../package');

const swaggerOptions = {
    documentationPath: '/docs',
    debug: true,
    basePath: '/api/v1',
    info: {
        title: 'Test API Documentation',
        version: PACKAGE.version,
        contact: {
            name: PACKAGE.author,
            email: PACKAGE.author_email
        }
    },
    cors: true,
    grouping: 'tags',
    tags: [
        {
            name: 'Users',
            description: 'Users API endpoints'
        }
    ],
    schemes: ['http', 'https'],
    host: 'localhost:8000'
};

const plugins = [
    hapiJwt,
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
]

module.exports = plugins;