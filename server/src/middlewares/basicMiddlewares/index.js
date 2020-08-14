const {prepareUserToSending} = require('../../utils');
const {USER_CHARACTERISTIC: {ROLE: {ADMIN}}} = require('../../constants');
const ForbiddenError = require('../../errors/ForbiddenError');

module.exports.sendAuthData = (req, res, next) => {
    const {authInfo, user} = req;
    res.send({
        user: prepareUserToSending(user),
        authInfo,
    });
};

module.exports.sendTokens = (req, res, next) => {
    const {authInfo} = req;
    res.send(authInfo);
};

module.exports.onlyForAdmin = (req, res, next) => {
    try {
        const {tokenData: {role}} = req;
        if (role === ADMIN) {
            return next();
        }
        new ForbiddenError();
    } catch (e) {
        next(e);
    }
};