const {prepareUserToSending, signTokens} = require('../../utils');

module.exports.sendAuthData = (req, res, next) => {
    const {tokenPair, user} = req;
    res.send({
        user: prepareUserToSending(user),
        tokenPair,
    });
};

module.exports.sendTokens = (req, res, next) => {
    const {tokenPair} = req;
    res.send(tokenPair);
};

module.exports.signTokens = async (req, res, next) => {
    const {user} = req;
    req.tokenPair = await signTokens(user);
    next();
};