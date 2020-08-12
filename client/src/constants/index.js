export default Object.freeze({
    LINKS: {
        BASE_URL: 'http://localhost:5000/',
    },
    VALIDATION: {
        PASSWORD_PATTERN: /^\S{6,32}$/,
        PASSWORD_PATTERN_MESSAGE: 'Password should not has any whitespace characters and be not longer that 32 characters',
        NAME_PATTERN: /(?!^ +$)^.{1,64}$/,
        NAME_PATTERN_MESSAGE: 'Name must has at least one non whitespace character and be not longer than 64 characters',
        CREDIT_CARD_PATTERN: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        CREDIT_CARD_PATTERN_MESSAGE: 'Card number is invalid it should contains only digits and be not longer than 16 digits',
    },
    USER_CHARACTERISTIC: {
        GENDER: {
            OTHER: 'other',
            MALE: 'male',
            FEMALE: 'female',
        }
    }
});