import User from "../../models/User.js";

export default async (req, res, next) => {
    const { firebaseUrl } = req.file ? req.file : '';
    req.body.photo = firebaseUrl

    try {
        const one = await User.create(
            { ...req.body });

        return res.status(201).json({
            response: { ...one._doc, photo: firebaseUrl},
            success: true,
            message: 'User created'
        })
    } catch (error) {
        return res.status(500).json({
            response: null,
            success: false,
            message: error.message
    })
}}
