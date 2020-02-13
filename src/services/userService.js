const MODELS = require("../models");

let userService = {};

/**
 * save user method
 */
userService.saveUser = async (dataToSave) => {
    return await MODELS.userModel.create(dataToSave);
}

/**
 * get user by id
 */
userService.getUser = async (criteria, projection) => {
    return await MODELS.userModel.findOne(criteria, projection).lean();
}

/**
 * get list of users
 */
userService.getUsers = async (criteria, projection) => {
    return await MODELS.userModel.find(criteria, projection).lean();
}

module.exports = userService;