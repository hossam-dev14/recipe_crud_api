const joi = require('joi');
const userSchema = require('models/user.js')

const validateLogin = (email, password) => {
    const userSchema = joi.object({
        email: joi.email().required(),
        password: joi.email().required()
    })

    return userSchema.validate(user)
}