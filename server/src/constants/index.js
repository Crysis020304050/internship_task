module.exports = Object.freeze({
    VALIDATION: {
        PASSWORD_PATTERN: /^\S{6,32}$/,
        NAME_PATTERN: /(?!^ +$)^.{1,64}$/,
    },
    USER_CHARACTERISTIC: {
        GENDER: {
            OTHER: 'other',
            MALE: 'male',
            FEMALE: 'female',
        },
        ROLE: {
            CUSTOMER: 'customer',
            ADMIN: 'admin',
        }
    },
    FAKE_ENV: {
        PORT: 5000,
        JWT_SECRET: 'secret',
        ACCESS_TOKEN_TIME: 60 * 10,
        REFRESH_TOKEN_TIME: 60 * 60 * 24 * 30,
        SALT_ROUNDS: 5,
    },
    OTHERS: {
        DATA_LOADING_LIMIT: 8,
    }
});