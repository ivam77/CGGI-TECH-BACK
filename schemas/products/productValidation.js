import joi from 'joi';

const productValidation = joi.object({
  title: joi.string()
    .required()
    .min(3)
    .messages({
      "string.empty": "Title is required",
      "string.min": "Min is not valid"
    }),
  brand: joi.string()
    .required()
    .messages({
      "string.empty": "Brand is required",
    }),
  category: joi.string()
    .required()
    .messages({
      "string.empty": "Category is required"
    }),
  type: joi.string()
    .required()
    .messages({
      "string.empty": "Type is required"
    }),
  description: joi.object() // Define la validación para 'description' según su estructura
    .required()
    .messages({
      "object.required": "Description is required"
    }),
    cover_photo: joi.array()
    .items(joi.string().uri())
    .required()
    .messages({
      "array.base": "Cover photo must be an array",
      "array.empty": "Cover photo is required",
      "string.uri": "Cover photo must be a valid URL"
    }),
  price: joi.number()
    .required()
    .messages({
      "number.required": "Price is required"
    }),
    available: joi.number()
    .required()
    .messages({
      "number.required": "Avaible is required"
    }),
    Moreview: joi.string()
    .required()
    .valid('yes', 'no', 'true', 'false')  // Permitir 'yes', 'no', 'true', 'false'
    .messages({
      "string.base": "Moreview must be a string",
      "string.empty": "Moreview is required",
      "any.only": "Moreview must be 'yes' or 'no'"
    }),
});

export default productValidation