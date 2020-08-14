const {createRefreshToken, deleteRefreshToken, findRefreshToken, updateRefreshToken} = require('./queries/refreshTokenQueries');

module.exports.createRefreshToken = async (req, res, next) => {
    try {
        const {authInfo: {refreshToken: value}, user: {id: userId}} = req;
        await createRefreshToken({
            value,
            userId,
        });
        next();
    } catch (e) {
        next(e);
    }
};

module.exports.findRefreshToken = async (req, res, next) => {
    try {
        const {body: {refreshToken: value}} = req;
        await findRefreshToken({value});
        next();
    } catch (e) {
        next(e);
    }
};

module.exports.updateRefreshToken = async (req, res, next) => {
    try {
        const {body: {refreshToken: value}, authInfo: {refreshToken}} = req;
        await updateRefreshToken({value: refreshToken}, {value});
        next();
    } catch (e) {
        next(e);
    }
};

module.exports.deleteRefreshToken = async (req, res, next) => {
    try {
        const {body: {refreshToken: value}} = req;
        await deleteRefreshToken({value});
        res.end();
    } catch (e) {
        next(e);
    }
};