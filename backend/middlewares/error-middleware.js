const ApiError  = require('../exceptions/api-error');

module.exports = function (err, req, res, next) {
    console.log('err middleware > ', err)

    if (err instanceof ApiError) {
        return res.status(err.status).send({ message: err.message, errors: err.errors });
    }

    return res.status(500).send({ message: 'Непредвиденная ошибка'});
}