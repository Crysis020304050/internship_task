import * as yup from 'yup';

export default {
    LoginSchema: yup.object().shape({
        email: yup.string().email('Check email').required().label('Email Address'),
        password: yup.string().matches(/^\S{6,32}$/, 'Password must has at least 6 non whitespace characters and be not longer that 32 characters').required().label('Password'),
    }),
}