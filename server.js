'use strict';

const Hapi = require('@hapi/hapi'),
    CONFIG = require('./utils/config'),
    plugins = require('./utils/plugins'),
    colors = require('colors'),
    moment = require("moment"),
    validate = require('./common/utilityFunctions').validate;

/**
 * initalise MONGODB
 */
require('./db')();

const init = async () => {
    const server = Hapi.server({
        host: CONFIG.local_server.host,
        port: CONFIG.local_server.port
    });

    await server.register(plugins);
    server.auth.strategy('jwt', 'jwt',
        {
            key: CONFIG.jwt_private_key,
            validate
        });
    server.auth.default('jwt');

    /**
    * initialising routes
    */
    server.route(require('./src/routes'));

    await server.start();
    console.log('Server running on', `${server.info.uri}`.yellow);

    /**
     * for logging requests
     */
    server.events.on('response', function (request) {
        console.log(`[${moment(new Date()).format('LLL')}]`.yellow + ' ' + request.method.toUpperCase().bold + ' ' + request.path.toString().green + ' ' + request.response.statusCode.toString().blue.bold);
    });
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
