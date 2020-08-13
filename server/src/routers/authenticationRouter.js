const createValidationMiddleware = require('../middlewares/validation');
const {RegistrationSchema} = require('../validationSchemas');
const hashPassword = require('../middlewares/hashPassword');
const userController = require('../controllers/userController');
const authenticationRouter = require('express')();

authenticationRouter.post(
    '/registration',
    createValidationMiddleware(RegistrationSchema),
    hashPassword,
    userController.createUser,
);

module.exports = authenticationRouter;