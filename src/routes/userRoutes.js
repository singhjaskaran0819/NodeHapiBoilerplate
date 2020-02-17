'use strict';

const Joi = require('@hapi/joi'),
    CONFIG = require('../../utils/config');

// controllers
const HANDLERS = require('../controllers');

let Routes = [
    {
        method: 'GET',
        path: `${CONFIG.v1_basePath}/users`,
        options: {
            auth: 'jwt',
            tags: ['api', 'Users'],
            description: 'Get users list.',
            notes: 'Return all users.',
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },
            handler: HANDLERS.userHandler.getUsers
        }
    },
    {
        method: 'GET',
        path: `${CONFIG.v1_basePath}/user`,
        options: {
            auth: 'jwt',
            tags: ['api', 'Users'],
            description: 'Get user.',
            notes: 'Return user details.',
            validate: {
                query: Joi.object({
                    id: Joi.string().required().description("Unique user ID.")
                }),
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },
            handler: HANDLERS.userHandler.getUserById
        }
    },
    {
        method: 'POST',
        path: `${CONFIG.v1_basePath}/user`,
        options: {
            auth: false,
            tags: ['api', 'Users'],
            description: 'Save user details.',
            notes: 'Save user details.',
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                payload: Joi.object({
                    email: Joi.string().required(),
                    name: Joi.string().required(),
                    password: Joi.string().required()
                })
            },
            handler: HANDLERS.userHandler.saveUser
        }
    },
    {
        method: 'POST',
        path: `${CONFIG.v1_basePath}/login`,
        options: {
            auth: false,
            tags: ['api', 'Users'],
            description: 'User login.',
            notes: 'User login.',
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                payload: Joi.object({
                    email: Joi.string().required(),
                    password: Joi.string().required()
                })
            },
            handler: HANDLERS.userHandler.login
        }
    }
]

module.exports = Routes