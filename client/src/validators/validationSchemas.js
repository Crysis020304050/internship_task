import * as yup from 'yup';
import constants from '../constants';

const {USER_CHARACTERISTIC: {GENDER: {OTHER, MALE, FEMALE}}, VALIDATION} = constants;

export default {
    LoginSchema: yup.object().shape({
        email: yup.string().email().required().label('Email Address'),
        password: yup.string().matches(VALIDATION.PASSWORD_PATTERN, VALIDATION.PASSWORD_PATTERN_MESSAGE).required().label('Password'),
    }),
    RegistrationSchema: yup.object().shape({
        firstName: yup.string().matches(VALIDATION.NAME_PATTERN, VALIDATION.NAME_PATTERN_MESSAGE).required().label('First Name'),
        lastName: yup.string().matches(VALIDATION.NAME_PATTERN, VALIDATION.NAME_PATTERN_MESSAGE).required().label('Last Name'),
        email: yup.string().email().required().label('Email Address'),
        password: yup.string().matches(VALIDATION.PASSWORD_PATTERN, VALIDATION.PASSWORD_PATTERN_MESSAGE).required().label('Password'),
        confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Confirm password must match password').label('Confirm Password'),
        birthday: yup.date().max(new Date(), 'Nice joke').required().label('Birthday'),
        creditCard: yup.string().matches(VALIDATION.CREDIT_CARD_PATTERN, VALIDATION.CREDIT_CARD_PATTERN_MESSAGE).required().label('Credit Card Number'),
        gender: yup.string().oneOf([OTHER, MALE, FEMALE]).required().label('Gender'),
    }),
}