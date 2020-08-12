const userQueries = require('./queries/userQueries');

module.exports.createUser = async (req, res, next) => {
    try {
        const {body, hashPass} = req;
        req.user = await userQueries.createUser({...body, password: hashPass});
        next();
    } catch (e) {
        next(e);
    }
};