const db = require('../../db/models');
const BadRequestError = require('../../errors/BadRequestError');
const NotFoundError = require('../../errors/NotFoundError');

module.exports.createUser = async data => {
    const user = await db.Users.create(data);
    if (user) {
        return user.get({plain: true});
    }
    throw new BadRequestError();
};

module.exports.findUser = async (predicate) => {
    const user = await db.Users.findOne({where: predicate});
    if (user) {
        return user.get({plain: true});
    }
    throw new NotFoundError('User with this data does not exist');
};

module.exports.updateUser = async (data, predicate) => {
    const [updatedRowsCount, [updatedUser]] = await db.Users.update(data,
        { where: predicate, returning: true, raw: true });
    if (updatedRowsCount) {
        return updatedUser;
    }
    throw new BadRequestError();
};