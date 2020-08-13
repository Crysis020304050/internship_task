const db = require('../../db/models');
const AuthorizationError = require('../../errors/AuthorizationError');

module.exports.createRefreshToken = async (data) => {
    const token = await db.RefreshToken.create(data);
    if (token) {
        return token;
    }
    throw new AuthorizationError();
};

module.exports.findRefreshToken = async (predicate) => {
    const token = await db.RefreshToken.findOne({where: predicate});
    if (token) {
        return token;
    }
    throw new AuthorizationError();
};

module.exports.updateRefreshTokenByModel = async (tokenModel, data) => {
    const updatedToken = await tokenModel.update(data);
    if (updatedToken) {
        return updatedToken;
    }
    throw new AuthorizationError();
};
