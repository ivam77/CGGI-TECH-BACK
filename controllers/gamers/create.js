import Gamers from "../../models/Gamers.js"

export default async (req, res, next) => {
    try {
        const one = await Gamers.create(
            { ...req.body });

        return res.status(201).json({
            response: { ...one._doc, /*photo: firebaseUrl*/ },
            success: true,
            message: 'Product Gamers created'
        })
    } catch (error) {
        return res.status(500).json({
            response: null,
            success: false,
            message: error.message
    })
}}