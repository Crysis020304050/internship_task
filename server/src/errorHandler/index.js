module.exports = (err, req, res, next) => {
    if (err.name === 'SequelizeUniqueConstraintError') {
        err.message = 'A record with such parameters already exists';
        err.code = 409;
    }
    const {message, code} = err;
    if ( !message || !code) {
        res.status(500).send('Server Error');
    } else {
        res.status(code).send(message);
    }
};