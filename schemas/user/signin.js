import joi from 'joi';

const userSignin = joi.object({
    email: joi.string()
    .required()
    .email({
        minDomainSegments: 2
    })
    .message({
        'string.base': 'Email must be a text',
            'string.empty': 'Email is a required field',
            'string.email': 'Email must be valid',
            'string.minDomainSegments': 'Email must have at least two domain segments'
    }),
    password: joi.string()
    .required()
    .min(6)
    .max(50)
    .alphanum()
    .message({
        'string.base': 'Password must be a text',
            'string.empty': 'Password is a required field',
            'string.min': 'Password must be at least 8 characters',
            'string.max': 'Password cannot be longer than 50 characters',
            'string.alphanum': 'Password can only contain alphanumeric characters'
    })
})

export default userSignin;