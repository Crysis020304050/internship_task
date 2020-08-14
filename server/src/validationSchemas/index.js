const {luhnAlgorithmCheck} = require('../utils');
const {VALIDATION: {NAME_PATTERN, PASSWORD_PATTERN}, USER_CHARACTERISTIC: {GENDER: {OTHER, MALE, FEMALE}}} = require('../constants');
const yup = require('yup');

module.exports.LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().matches(PASSWORD_PATTERN).required(),
});

module.exports.RegistrationSchema = yup.object().shape({
    firstName: yup.string().matches(NAME_PATTERN).required(),
    lastName: yup.string().matches(NAME_PATTERN).required(),
    login: yup.string().matches(NAME_PATTERN).required(),
    email: yup.string().email().required(),
    password: yup.string().matches(PASSWORD_PATTERN).required(),
    birthday: yup.date().max(new Date()).required(),
    creditCard: yup.string().test('test_card_number', value => (luhnAlgorithmCheck(value) && value.length === 16)).required(),
    gender: yup.string().oneOf([OTHER, MALE, FEMALE]).required(),
});

module.exports.updateUserSchema = yup.object().shape({
    firstName: yup.string().matches(NAME_PATTERN).required(),
    lastName: yup.string().matches(NAME_PATTERN).required(),
    login: yup.string().matches(NAME_PATTERN).required(),
    birthday: yup.date().max(new Date()).required(),
    creditCard: yup.string().test('test_card_number', value => (luhnAlgorithmCheck(value) && value.length === 16)).required(),
    gender: yup.string().oneOf([OTHER, MALE, FEMALE]).required(),
});