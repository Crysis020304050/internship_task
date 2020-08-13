const refreshTokenQueries = require('./queries/refreshTokenQueries');

module.exports.createRefreshToken = async (req, res, next) => {
    try {
        const {authInfo: {refreshToken: value}, user: {id: userId}} = req;
        await refreshTokenQueries.createRefreshToken({
            value,
            userId,
        });
        next();
    } catch (e) {
        next(e);
    }
};