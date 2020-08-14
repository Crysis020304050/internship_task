const {signTokens} = require('../../utils');
const util = require('util');
const jwt = require('jsonwebtoken');
const {FAKE_ENV: {JWT_SECRET}} = require('../../constants');
const AuthorizationError = require('../../errors/AuthorizationError');
const AuthenticationTimeoutError = require('../../errors/AuthenticationTimeoutError');

const verify = util.promisify(jwt.verify);

module.exports.signTokens = async (req, res, next) => {
    const {user} = req;
    req.authInfo = await signTokens(user);
    next();
};

module.exports.verifyRefreshToken = async (req, res, next) => {
    try {
        const {body: {refreshToken}} = req;
        const {user} = await verify(refreshToken, JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        next(new AuthorizationError());
    }
};

module.exports.verifyAccessToken = async (req, res, next) => {
    try {
        const {headers: {authorization: accessToken}} = req;
        if (accessToken) {
            const {user} = await verify(accessToken, JWT_SECRET);
            req.tokenData = user;
            next();
        } else {
            next(new AuthorizationError());
        }
    } catch (e) {
        next(new AuthenticationTimeoutError());
    }
};