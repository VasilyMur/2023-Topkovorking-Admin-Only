const ApiError  = require('../exceptions/api-error');
const tokenHandler = require('../handlers/token-handler');

module.exports = async function (req, res, next) {
    console.log('auth middleware ---------------->>> ', req.user)
    // console.log('server call >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ---------------->>> ', req)
    try {
        const authorizationHeader = req.headers.authorization;
        console.log('authorizationHeader >>>>>> ', authorizationHeader)

        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = await tokenHandler.validateAccessToken(accessToken);

        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        req.user = userData;
        next();


    } catch(err) {
        console.log('auth middleware error *******>>>>> ', err)
        return next(ApiError.UnauthorizedError());
    }
}

