const {prepareUserToSending} = require('../../utils');

module.exports.sendAuthData = (req, res, next) => {
    const {accessTokenValue, refreshTokenValue, user} = req;
    res.send({
        user: prepareUserToSending(user),
        tokenPair: {
            accessToken: accessTokenValue,
            refreshToken: refreshTokenValue,
        },
    });
};

module.exports.sendTokens = (req, res, next) => {
    const {accessTokenValue, refreshTokenValue} = req;
    res.send({
        accessToken: accessTokenValue,
        refreshToken: refreshTokenValue,
    });
};