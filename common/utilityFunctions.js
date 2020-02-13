const MODELS = require('../src/models'),
    SERVICES = require('../src/services'),
    jwt = require('jsonwebtoken'),
    CONFIG = require('../utils/config');

let commonFunction = {};

/**
 * bring your own validation function
 */
commonFunction.validate = async (decoded, request, h) => {
    const user = await SERVICES.userService.getUser({ _id: decoded.id }, { password: 0 });
    if (user) {
        return { isValid: false };
    }
    else {
        return { isValid: true };
    }
};

/**
 * jwt token
 */
commonFunction.generateToken = (user) => {
    return jwt.sign(user, CONFIG.jwt_private_key);
}

module.exports = commonFunction;