import Joi from "joi";

const gamers = Joi.object({
    title: Joi.string()
        .required()
        .min(1)
        .max(30)
        .messages({
            'any.required': 'Title is required',
            'string.min': 'Title must be at least 1 character long',
            'string.max': 'Title must not exceed 30 characters',
        }),
    description: Joi.object({
        main: Joi.string()
            .required()
            .messages({
                'any.required': 'Description is required',
            }),
        features: Joi.object({
            case: Joi.string().required(),
            monitor: Joi.string().required(),
            processor: Joi.string().required(),
            motherboard: Joi.string().required(),
            graphics_card: Joi.string().required(),
            peripherals: Joi.string().required(),
            power_supply: Joi.string().required(),
            storage: Joi.string().required(),
            ram: Joi.string().required(),
            stabilizer: Joi.string().required(),
        }).required(),
    }).required(),
    cover_photo: Joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'Cover photo is required',
            'string.uri': 'Cover photo must be a valid URI',
        }),
    price: Joi.number()
        .required()
        .positive()
        .messages({
            'any.required': 'Price is required',
            'number.positive': 'Price must be a positive number',
        }),
});

export default gamers;