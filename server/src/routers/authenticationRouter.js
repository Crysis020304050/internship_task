const createValidationMiddleware = require('../middlewares/validation');
const {RegistrationSchema} = require('../validationSchemas');
const hashPassword = require('../middlewares/hashPassword');
const userController = require('../controllers/userController');
const {signTokens, sendAuthData} = require('../middlewares/basicMiddlewares');
const refreshTokenController = require('../controllers/refreshTokenController');
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

module.exports = authenticationRouter;