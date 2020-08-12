const bcrypt = require('bcrypt');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.comparePasswords = async (pass1, pass2) => {
    const result = await bcrypt.compare(pass1, pass2);
    if ( !result) {
        throw new ForbiddenError('Wrong password');
    }
};