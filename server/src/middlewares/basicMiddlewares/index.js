const {prepareUserToSending} = require('../../utils');

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