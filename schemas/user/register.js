import joi from "joi";

const userRegister = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2,
        })
        .messages({
            "string.email": "This mail is not valid, please insert a valid mail",
            "string.empty": "A mail is required"
        }),
    password: joi.string()
        .required()
        .min(6)
        .max(50)
        .messages({
            "string.min": "Your password must have a minimum of 8 characters",
            "string.max": "Your password must have a maximum of 50 characters",
            "string.empty": "Please, insert a password"
        }),
    location: joi.string()
        .optional(),
    photo: joi.string().uri()
        .messages({
            "string.uri": "Invalid photo URL. Please provide a valid URL",
            "string.empty": "Please, insert a photo URL"
        }),
    role: joi.number()
    .optional(),
});

export default userRegister
