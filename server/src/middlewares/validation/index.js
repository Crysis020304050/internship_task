const BadRequestError = require('../../errors/BadRequestError');

const createValidationMiddleware = schema => (
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

module.exports = createValidationMiddleware;