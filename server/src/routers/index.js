const authenticationRouter = require('./authenticationRouter');

const router = require('express')();

router.use(authenticationRouter);

module.exports = router;