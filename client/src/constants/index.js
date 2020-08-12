import {createTextMask} from 'redux-form-input-masks';

export default Object.freeze({
    LINKS: {
        BASE_URL: 'http://localhost:5000/',
    },
    VALIDATION: {
        PASSWORD_PATTERN: /^\S{6,32}$/,
        PASSWORD_PATTERN_MESSAGE: 'Password should not has any whitespace characters and be not longer that 32 characters',
        NAME_PATTERN: /(?!^ +$)^.{1,64}$/,
        NAME_PATTERN_MESSAGE: 'Field must has at least one non whitespace character and be not longer than 64 characters',
        CREDIT_CARD_MASK: createTextMask({
            pattern: '9999 9999 9999 9999',
        }),

    },
    USER_CHARACTERISTIC: {
        GENDER: {
            OTHER: 'other',
            MALE: 'male',
            FEMALE: 'female',
        }
    }
});