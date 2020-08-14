const createValidationMiddleware = require('../middlewares/validation');
const {RegistrationSchema, LoginSchema} = require('../validationSchemas');
const hashPassword = require('../middlewares/hashPassword');
const {createUser} = require('../controllers/userController');
const {sendAuthData, sendTokens} = require('../middlewares/basicMiddlewares');
const {verifyRefreshToken, signTokens} = require('../middlewares/tokenMiddlewares');
const {findRefreshToken, createRefreshToken, updateRefreshToken, deleteRefreshToken} = require('../controllers/refreshTokenController');
const passport = require('../middlewares/passport');
const authenticationRouter = require('express')();

authenticationRouter.post(
    '/registration',
    createValidationMiddleware(RegistrationSchema),
    hashPassword,
    createUser,
    signTokens,
    createRefreshToken,
    sendAuthData,
);

authenticationRouter.post(
    '/login',
    createValidationMiddleware(LoginSchema),
    passport.authenticate('login', {session: false}),
    sendAuthData,
);

authenticationRouter.post(
    '/refreshTokenLogin',
    passport.authenticate('refreshTokenLogin', {session: false}),
    sendAuthData,
);

authenticationRouter.post(
    '/refreshTokens',
    verifyRefreshToken,
    findRefreshToken,
    signTokens,
    updateRefreshToken,
    sendTokens,
);

authenticationRouter.post(
    '/logout',
    verifyRefreshToken,
    deleteRefreshToken,
);

module.exports = authenticationRouter;