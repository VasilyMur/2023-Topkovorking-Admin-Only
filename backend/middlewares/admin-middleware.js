const ApiError  = require('../exceptions/api-error');

module.exports = async function (req, res, next) {
    console.log('admin middleware ---------------->>> ', req.user)
    try {
        const { user } = req;

        if (user.role !== 'admin') {
            return next(ApiError.UnauthorizedError());
        }

        next();
        
    } catch(err) {
        console.log('admin middleware error *******>>>>> ', err)
        return next(ApiError.UnauthorizedError());
    }
}
