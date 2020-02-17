const SERVICES = require("../services"),
    constants = require('../../utils/contants'),
    common = require('../../common/utilityFunctions');

let userController = {};

/**
 * get user by id
 */
userController.getUserById = async (req, h) => {
    let responseObject;
    const user = await SERVICES.userService.getUser({ _id: req.query.id }, { __v: 0, password: 0 })
    if (user) {
        responseObject = Object.assign(constants.RESPONSEMESSAGES.SUCCESS.MISSCELANEOUSAPI(), { user });
    } else {
        responseObject = Object.assign(constants.RESPONSEMESSAGES.ERROR.DATA_NOT_FOUND(constants.MESSAGES.DATA_NOT_FOUND));
    }
    return responseObject;
}

/**
 * user listing
 */
userController.getUsers = async (req, h) => {
    const users = await SERVICES.userService.getUsers({}, { __v: 0, password: 0 })
    let responseObject = Object.assign(constants.RESPONSEMESSAGES.SUCCESS.MISSCELANEOUSAPI(), { users });
    return responseObject;
}

/**
 * user saving
 */
userController.saveUser = async (req, h) => {
    try {
        await SERVICES.userService.saveUser(req.payload);
        return Object.assign(constants.RESPONSEMESSAGES.SUCCESS.MISSCELANEOUSAPI(), constants.STATUS_MSG.SUCCESS.CREATED);
    } catch (e) {
        if (e.code === 11000 && e.name === 'MongoError') {
            return Object.assign(constants.RESPONSEMESSAGES.ERROR.ALREADY_EXISTS(), constants.STATUS_MSG.ERROR.ALREADY_EXIST);
        } else
            throw e
    }
}

/**
 * user login
 */
userController.login = async (req, h) => {
    const user = await SERVICES.userService.getUser({ email: req.payload.email }, { password: 1 });
    if (user) {
        if (user.password === req.payload.password) {
            delete user.password;
            const accessToken = common.generateToken(user);
            Object.assign(user, { token: accessToken });
            return Object.assign(constants.RESPONSEMESSAGES.SUCCESS.MISSCELANEOUSAPI(constants.MESSAGES.SUCCESSFULLYLOGGEDIN), { user });
        }
        return Object.assign(constants.RESPONSEMESSAGES.ERROR.FORBIDDEN(), constants.STATUS_MSG.ERROR.INCORRECT_PASSWORD);
    }
    return Object.assign(constants.RESPONSEMESSAGES.ERROR.DATA_NOT_FOUND(), constants.STATUS_MSG.ERROR.DATA_NOT_FOUND);
}

module.exports = userController;