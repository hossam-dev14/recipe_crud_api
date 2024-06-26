const { expressjwt } = require('express-jwt');

// Protecting the API and Authentication JWT Middleware
function authJwt() {
    const secret = process.env.JWT_SECRET;
    return expressjwt({
        secret,
        algorithms: ['HS256']
    })
    .unless({
        path: [
            { url: /\/api\/recipes(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api-docs/, methods: ['GET', 'OPTIONS'] },
            '/api/users/signup',
            '/api/users/login'

        ]
    })
}


module.exports = authJwt;