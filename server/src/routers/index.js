const authenticationRouter = require('./authenticationRouter');
const usersDataRouter = require('./usersDataRouter');
const {verifyAccessToken} = require('../middlewares/tokenMiddlewares');

const router = require('express')();

router.use(authenticationRouter);

router.use(verifyAccessToken);

router.use(usersDataRouter);

module.exports = router;