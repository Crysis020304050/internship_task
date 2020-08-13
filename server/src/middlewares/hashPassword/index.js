const {FAKE_ENV: {SALT_ROUNDS}} = require('../../constants');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    try {
        const {body: {password}} = req;
        req.hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
        next();
    } catch (e) {
        next(e);
    }
};