const mongoose = require('mongoose'),
    CONFIG = require('./utils/config');

module.exports = async () => {
    const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        reconnectTries: 20,
        reconnectInterval: 2000,
    };
    await mongoose.connect(CONFIG.mongoDB.URL, options);
    console.log('Mongo connected at', `${CONFIG.mongoDB.URL}`.blue);
};