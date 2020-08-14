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

module.exports.updateRefreshToken = async (data, predicate) => {
    const [updatedRowsCount, [updatedUser]] = await db.RefreshToken.update(data,
        { where: predicate, returning: true, raw: true });
    if (updatedRowsCount) {
        return updatedUser;
    }
    throw new AuthorizationError();
};