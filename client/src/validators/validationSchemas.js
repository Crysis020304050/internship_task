import * as yup from 'yup';
import constants from '../constants';

export default {
    LoginSchema: yup.object().shape({
        email: yup.string().email().required().label('Email Address'),
        password: yup.string().matches(constants.VALIDATION.PASSWORD_PATTERN, constants.VALIDATION.PASSWORD_PATTERN_MESSAGE).required().label('Password'),
    }),
    RegistrationSchema: yup.object().shape({
        firstName: yup.string().matches(constants.VALIDATION.NAME_PATTERN, constants.VALIDATION.NAME_PATTERN_MESSAGE).required().label('First Name'),
        lastName: yup.string().matches(constants.VALIDATION.NAME_PATTERN, constants.VALIDATION.NAME_PATTERN_MESSAGE).required().label('Last Name'),
        email: yup.string().email().required().label('Email Address'),
        password: yup.string().matches(constants.VALIDATION.PASSWORD_PATTERN, constants.VALIDATION.PASSWORD_PATTERN_MESSAGE).required().label('Password'),
        confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Confirm password must match password').label('Confirm Password'),
    }),
}