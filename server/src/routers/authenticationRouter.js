const createValidationMiddleware = require('../middlewares/validation');
const {RegistrationSchema, LoginSchema} = require('../validationSchemas');
const hashPassword = require('../middlewares/hashPassword');
const userController = require('../controllers/userController');
const {signTokens, sendAuthData, sendTokens} = require('../middlewares/basicMiddlewares');
const refreshTokenController = require('../controllers/refreshTokenController');
const passport = require('../middlewares/passport');
const authenticationRouter = require('express')();

authenticationRouter.post(
    '/registration',
    createValidationMiddleware(RegistrationSchema),
    hashPassword,
    userController.createUser,
    signTokens,
    refreshTokenController.createRefreshToken,
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
    passport.authenticate('refreshTokens', {session: false}),
    sendTokens,
);

module.exports = authenticationRouter;