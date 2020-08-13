const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ForbiddenError = require('../errors/ForbiddenError');
const {FAKE_ENV: {JWT_SECRET, ACCESS_TOKEN_TIME, REFRESH_TOKEN_TIME}} = require('../constants');
const util = require('util');

const sign = util.promisify(jwt.sign);
const verify = util.promisify(jwt.verify);

module.exports.comparePasswords = async (pass1, pass2) => {
    const result = await bcrypt.compare(pass1, pass2);
    if (!result) {
        throw new ForbiddenError('Wrong password');
    }
};

module.exports.luhnAlgorithmCheck = num => {
    let arr = (num + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
};

module.exports.prepareUserToSending = ({password, ...rest}) => rest;

module.exports.signTokens = async (payload) => {
    const refreshToken = await sign({user: payload}, JWT_SECRET, {expiresIn: REFRESH_TOKEN_TIME});
    const accessToken = await sign({user: payload}, JWT_SECRET, {expiresIn: ACCESS_TOKEN_TIME});
    return {refreshToken, accessToken};
};