const BadRequestError = require('../../errors/BadRequestError');

module.exports = schema => (
    async (req, res, next) => {
        try {
            const result = await schema.isValid(req.body);
            if (result) {
                return next();
            }
            new BadRequestError();
        } catch (e) {
            next(e);
        }
    }
);