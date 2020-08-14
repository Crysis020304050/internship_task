const {createUser, getUsers, updateUser} = require('./queries/userQueries');
const {USER_CHARACTERISTIC: {ROLE: {CUSTOMER}}} = require('../constants');
const {prepareUserToSending} = require('../utils');
const db = require('../db/models');

module.exports.createUser = async (req, res, next) => {
    try {
        const {body, hashPassword} = req;
        req.user = await createUser({...body, password: hashPassword});
        next();
    } catch (e) {
        next(e);
    }
};

module.exports.getUsers = async (req, res, next) => {
    try {
        const {tokenData: {role, id}, body: {limit, offset}} = req;
        const users = await getUsers({
            where: {
                id: {
                    [db.Sequelize.Op.not]: id,
                },
                ...(role === CUSTOMER && {role: CUSTOMER}),
            },
            limit: limit || 8,
            offset: offset || 0,
            order: [['id', 'DESC']],
            attributes: {exclude: ['password', ...(role === CUSTOMER && ['creditCard'])]},
        });
        res.send({users, hasMore: users.length >= limit});
    } catch (e) {
        next(e);
    }
};

module.exports.updateUser = async (req, res, next) => {
    try {
        const {body} = req;
        const updatedUser = await updateUser({...body}, {id: body.id});
        res.send(prepareUserToSending(updatedUser));
    } catch (e) {
        next(e);
    }
};