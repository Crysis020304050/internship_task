const {onlyForAdmin} = require('../middlewares/basicMiddlewares');
const {getUsers, updateUser} = require('../controllers/userController');
const createValidationMiddleware = require('../middlewares/validation');
const {updateUserSchema} = require('../validationSchemas');
const usersDataRouter = require('express')();

usersDataRouter.post(
    '/getUsers',
    getUsers,
);

usersDataRouter.post(
    '/updateUserData',
    onlyForAdmin,
    createValidationMiddleware(updateUserSchema),
    updateUser,
);

module.exports = usersDataRouter;