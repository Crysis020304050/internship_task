const userQueries = require('./queries/userQueries');

module.exports.createUser = async (req, res, next) => {
    try {
        const {body, hashPassword} = req;
        req.user = await userQueries.createUser({...body, password: hashPassword});
        next();
    } catch (e) {
        next(e);
    }
};